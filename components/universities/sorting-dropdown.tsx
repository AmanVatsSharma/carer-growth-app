"use client"

import { useRouter, useSearchParams } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SortingDropdown() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentSort = searchParams.get("sortBy") || "name_asc"

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("sortBy", value)
    router.push(`/universities?${params.toString()}`)
  }

  return (
    <div className="flex items-center gap-2">
        <label htmlFor="sort-by" className="text-sm font-medium">Sort by</label>
        <Select value={currentSort} onValueChange={handleSortChange}>
        <SelectTrigger id="sort-by" className="w-[180px]">
            <SelectValue placeholder="Sort by..." />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="name_asc">Name (A-Z)</SelectItem>
            <SelectItem value="name_desc">Name (Z-A)</SelectItem>
            {/* Add other sorting options as needed */}
        </SelectContent>
        </Select>
    </div>
  )
}