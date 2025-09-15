// components/admin/universities/university-data-table.tsx
"use client"

import * as React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { UniversityForm } from "./university-form"
import type { University } from "@/lib/universities-data"

export function UniversityDataTable({ columns, data }: { columns: ColumnDef<University>[], data: University[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [selectedUniversity, setSelectedUniversity] = React.useState<University | null>(null)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: { sorting, columnFilters },
    meta: {
      openModal: (university) => {
        setSelectedUniversity(university)
        setIsModalOpen(true)
      },
    },
  })

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedUniversity(null)
  }

  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Filter by name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
        <Button onClick={() => {
          setSelectedUniversity(null)
          setIsModalOpen(true)
        }}>
          <PlusCircle className="mr-2 h-4 w-4" /> Add University
        </Button>
      </div>
      <div className="rounded-md border">
        {/* ... Table rendering code (same as your UniversityTable) ... */}
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        {/* ... Pagination buttons (same as your UniversityTable) ... */}
      </div>

      {/* --- ADD/EDIT MODAL --- */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedUniversity ? "Edit University" : "Add New University"}</DialogTitle>
          </DialogHeader>
          <UniversityForm university={selectedUniversity} onFinished={handleModalClose} />
        </DialogContent>
      </Dialog>
    </div>
  )
}