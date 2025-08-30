"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useMemo } from "react"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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

  const current = useMemo(() => {
    return {
      country: params.get("country") || undefined,
      exam: params.get("exam") || undefined,
      service: params.get("service") || undefined,
    }
  }, [params])

  function update(
    next: Partial<{ country: string | undefined; exam: string | undefined; service: string | undefined }>,
  ) {
    const sp = new URLSearchParams(params.toString())
    if ("country" in next) {
      if (next.country) sp.set("country", next.country)
      else sp.delete("country")
    }
    if ("exam" in next) {
      if (next.exam) sp.set("exam", next.exam)
      else sp.delete("exam")
    }
    if ("service" in next) {
      if (next.service) sp.set("service", next.service)
      else sp.delete("service")
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
      <CardContent className="p-4 md:p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select value={current.country} onValueChange={(v) => update({ country: v })}>
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
            <Select value={current.exam} onValueChange={(v) => update({ exam: v })}>
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
                const checked = current.service === s.key
                return (
                  <label key={s.key} className="flex items-center gap-2">
                    <Checkbox
                      checked={checked}
                      onCheckedChange={(v) => update({ service: v ? s.key : undefined })}
                      aria-label={s.label}
                    />
                    <span className="text-sm">{s.label}</span>
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
