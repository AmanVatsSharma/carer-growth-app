//components/universitiesfilters.tsx
"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useMemo } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type FiltersProps = {
  countries: string[]
  exams: string[]
}

const services = [
  { key: "visaSupport", label: "Visa Support" },
  { key: "accommodation", label: "Accommodation" },
  { key: "forex", label: "Forex" },
  { key: "counselling", label: "Counselling" },
  { key: "applicationFeeWaiver", label: "Application Fee Waiver" },
  { key: "scholarshipsHelp", label: "Scholarships Help" },
] as const

export function Filters({ countries, exams }: FiltersProps) {
  const router = useRouter()
  const params = useSearchParams()

  const currentServices = useMemo(() => {
    return params.get("services")?.split(",") || []
  }, [params])


  function updateServices(key: string, checked: boolean) {
    const sp = new URLSearchParams(params.toString())
    const services = new Set(currentServices)
    if (checked) {
      services.add(key)
    } else {
      services.delete(key)
    }

    if (services.size > 0) {
      sp.set("services", Array.from(services).join(","))
    } else {
      sp.delete("services")
    }
    router.push(`/universities?${sp.toString()}`)
  }

  function reset() {
    const sp = new URLSearchParams(params.toString())
    sp.delete("country")
    sp.delete("exam")
    sp.delete("service")
    router.push(`/universities?${sp.toString()}`)
  }

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Filter & Refine</CardTitle>
      </CardHeader>

      <CardContent className="p-4 md:p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select value={currentServices.country} onValueChange={(v) => update({ country: v })}>
              <SelectTrigger id="country">
                <SelectValue placeholder="All countries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="__all" disabled>
                  All
                </SelectItem>
                {countries.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="exam">Exam</Label>
            <Select value={currentServices.exam} onValueChange={(v) => update({ exam: v })}>
              <SelectTrigger id="exam">
                <SelectValue placeholder="Any exam" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="__any" disabled>
                  Any
                </SelectItem>
                {exams.map((e) => (
                  <SelectItem key={e} value={e}>
                    {e}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>IPD Services</Label>
            <div className="grid grid-cols-1 gap-2">
              {services.map((s) => {
                const checked = currentServices.includes(s.key)
                return (
                  <label key={s.key} className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={checked}
                      onCheckedChange={(v) => updateServices(s.key, !!v)}
                      aria-label={s.label}
                    />
                    <span className="text-sm font-medium">{s.label}</span>
                  </label>
                )
              })}
            </div>
          </div>

          <Button variant="secondary" className="w-full" onClick={reset}>
            Reset filters
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
