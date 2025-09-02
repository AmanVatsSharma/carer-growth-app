"use client"

import { ColumnDef } from "@tanstack/react-table"
import { University } from "@/lib/universities-data" // Assumes type is updated
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export const columns: ColumnDef<University>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const university = row.original
      return (
        <div className="flex items-center gap-3">
          <img src={university.logoUrl || "/placeholder.svg"} alt={university.name} className="h-8 w-8 rounded-sm" />
          <span className="font-medium">{university.name}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "updatedAt",
    header: "Last Updated",
    cell: ({ row }) => new Date(row.original.updatedAt).toLocaleDateString(),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const university = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(university.id)}>
              Copy ID
            </DropdownMenuItem>
            <DropdownMenuItem>Edit University</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">Delete University</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]