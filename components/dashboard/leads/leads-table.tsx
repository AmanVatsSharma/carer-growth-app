"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { Trash2, Phone, User, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

interface Lead {
  id: string
  name: string
  phone: string
  contacted: boolean
  status: "new" | "contacted" | "qualified" | "converted" | "closed"
  createdAt: Date
  updatedAt: Date
}

export function LeadsTable() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [contactedFilter, setContactedFilter] = useState<string>("all")

  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    try {
      const response = await fetch("/api/leads")
      if (response.ok) {
        const data = await response.json()
        setLeads(
          data.map((lead: any) => ({
            ...lead,
            createdAt: new Date(lead.createdAt),
            updatedAt: new Date(lead.updatedAt),
          })),
        )
      }
    } catch (error) {
      toast("Error",{
        description: "Failed to fetch leads",
      })
    } finally {
      setLoading(false)
    }
  }

  const updateLeadContacted = async (id: string, contacted: boolean) => {
    try {
      const response = await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contacted }),
      })

      if (response.ok) {
        setLeads(leads.map((lead) => (lead.id === id ? { ...lead, contacted, updatedAt: new Date() } : lead)))
        toast("Success",{
          description: `Lead marked as ${contacted ? "contacted" : "not contacted"}`,
        })
      }
    } catch (error) {
      toast("Error",{
        description: "Failed to update lead",
      })
    }
  }

  const updateLeadStatus = async (id: string, status: Lead["status"]) => {
    try {
      const response = await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      })

      if (response.ok) {
        setLeads(leads.map((lead) => (lead.id === id ? { ...lead, status, updatedAt: new Date() } : lead)))
        toast("Success",{
          description: "Lead status updated successfully",
        })
      }
    } catch (error) {
      toast("Error",{
        description: "Failed to update lead status",
      })
    }
  }

  const deleteLead = async (id: string) => {
    try {
      const response = await fetch(`/api/leads/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setLeads(leads.filter((lead) => lead.id !== id))
        toast("Success",{
          description: "Lead deleted successfully",
        })
      }
    } catch (error) {
      toast("Error",{
        description: "Failed to delete lead",
      })
    }
  }

  const getStatusBadge = (status: Lead["status"]) => {
    const variants = {
      new: "default",
      contacted: "secondary",
      qualified: "outline",
      converted: "default",
      closed: "secondary",
    } as const

    const colors = {
      new: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      contacted: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      qualified: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      converted: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      closed: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    }

    return <Badge className={colors[status]}>{status.charAt(0).toUpperCase() + status.slice(1)}</Badge>
  }

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || lead.phone.includes(searchTerm)
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter
    const matchesContacted =
      contactedFilter === "all" ||
      (contactedFilter === "contacted" && lead.contacted) ||
      (contactedFilter === "not-contacted" && !lead.contacted)

    return matchesSearch && matchesStatus && matchesContacted
  })

  if (loading) {
    return <div className="text-center py-8">Loading leads...</div>
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-2 flex-1">
          <Input
            placeholder="Search by name or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="qualified">Qualified</SelectItem>
              <SelectItem value="converted">Converted</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
          <Select value={contactedFilter} onValueChange={setContactedFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Contacted" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="not-contacted">Not Contacted</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="text-sm text-muted-foreground">
          {filteredLeads.length} of {leads.length} leads
        </div>
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Name
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone
                </div>
              </TableHead>
              <TableHead className="text-center">Contacted</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Created
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Updated
                </div>
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLeads.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                  No leads found
                </TableCell>
              </TableRow>
            ) : (
              filteredLeads.map((lead) => (
                <TableRow key={lead.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{lead.name}</TableCell>
                  <TableCell>
                    <a
                      href={`tel:${lead.phone}`}
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {lead.phone}
                    </a>
                  </TableCell>
                  <TableCell className="text-center">
                    <Checkbox
                      checked={lead.contacted}
                      onCheckedChange={(checked) => updateLeadContacted(lead.id, checked as boolean)}
                    />
                  </TableCell>
                  <TableCell>
                    <Select
                      value={lead.status}
                      onValueChange={(value) => updateLeadStatus(lead.id, value as Lead["status"])}
                    >
                      <SelectTrigger className="w-[120px] h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="contacted">Contacted</SelectItem>
                        <SelectItem value="qualified">Qualified</SelectItem>
                        <SelectItem value="converted">Converted</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {format(lead.createdAt, "MMM dd, yyyy")}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {format(lead.updatedAt, "MMM dd, yyyy")}
                  </TableCell>
                  <TableCell className="text-right">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Lead</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete this lead? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => deleteLead(lead.id)}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
