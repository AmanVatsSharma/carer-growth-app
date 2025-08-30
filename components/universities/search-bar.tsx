"use client"
import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SearchBar({ className }: { className?: string }) {
  const router = useRouter()
  const params = useSearchParams()
  const [q, setQ] = useState(() => params.get("q") || "")

  useEffect(() => {
    setQ(params.get("q") || "")
  }, [params])

  function submit(next: string) {
    const sp = new URLSearchParams(params.toString())
    if (next) sp.set("q", next)
    else sp.delete("q")
    router.push(`/universities?${sp.toString()}`)
  }

  return (
    <div className={cn("flex w-full items-center gap-2", className)}>
      <Input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search universities, courses, countries..."
        className="h-11"
        onKeyDown={(e) => {
          if (e.key === "Enter") submit(q)
        }}
        aria-label="Search universities"
      />
      <Button size="lg" onClick={() => submit(q)}>
        Search
      </Button>
    </div>
  )
}
