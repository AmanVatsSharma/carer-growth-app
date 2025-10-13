"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { Trash2, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

interface HeavyLead {
  id: string
  name: string
  email?: string
  phone?: string
  currentCity: string
  aboutYourself?: string
  preferredCountry: string
  intakeTimeline: string
  studyLevel: string
  currentEducation: string
  passportStatus: string
  status: "NEW" | "CONTACTED" | "IN_PROGRESS" | "QUALIFIED" | "CONVERTED" | "CLOSED"
  assignedTo?: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export function HeavyLeadsTable() {
  const [leads, setLeads] = useState<HeavyLead[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [selectedLead, setSelectedLead] = useState<HeavyLead | null>(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    try {
      const response = await fetch("/api/heavyleads")
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
      toast.error("Failed to fetch leads")
    } finally {
      setLoading(false)
    }
  }

  const updateLeadStatus = async (id: string, status: HeavyLead["status"]) => {
    try {
      const response = await fetch(`/api/heavyleads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      })

      if (response.ok) {
        setLeads(leads.map((lead) => (lead.id === id ? { ...lead, status, updatedAt: new Date() } : lead)))
        toast.success("Lead status updated successfully")
      }
    } catch (error) {
      toast.error("Failed to update lead status")
    }
  }

  const deleteLead = async (id: string) => {
    try {
      const response = await fetch(`/api/heavyleads/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setLeads(leads.filter((lead) => lead.id !== id))
        toast.success("Lead deleted successfully")
      }
    } catch (error) {
      toast.error("Failed to delete lead")
    }
  }

  const getStatusBadge = (status: HeavyLead["status"]) => {
    const colors = {
      NEW: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      CONTACTED: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      IN_PROGRESS: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      QUALIFIED: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
      CONVERTED: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      CLOSED: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    }

    return <Badge className={colors[status]}>{status.replace("_", " ")}</Badge>
  }

  const viewDetails = (lead: HeavyLead) => {
    setSelectedLead(lead)
    setIsDetailOpen(true)
  }

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone?.includes(searchTerm) ||
      lead.currentCity.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter

    return matchesSearch && matchesStatus
  })

  if (loading) {
    return <div className="text-center py-8">Loading heavy leads...</div>
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-2 flex-1">
          <Input
            placeholder="Search by name, email, phone, or city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="NEW">New</SelectItem>
              <SelectItem value="CONTACTED">Contacted</SelectItem>
              <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
              <SelectItem value="QUALIFIED">Qualified</SelectItem>
              <SelectItem value="CONVERTED">Converted</SelectItem>
              <SelectItem value="CLOSED">Closed</SelectItem>
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
              <TableHead className="min-w-[160px]">Name</TableHead>
              <TableHead className="hidden md:table-cell">Contact</TableHead>
              <TableHead className="hidden md:table-cell">Country</TableHead>
              <TableHead className="hidden lg:table-cell">Study Level</TableHead>
              <TableHead className="hidden lg:table-cell">Intake</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden lg:table-cell">Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLeads.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                  No leads found
                </TableCell>
              </TableRow>
            ) : (
              filteredLeads.map((lead) => (
                <TableRow key={lead.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">
                    {lead.name}
                    <div className="md:hidden text-xs text-muted-foreground mt-1">
                      {lead.email && <div className="text-blue-600">{lead.email}</div>}
                      {lead.phone && <div>{lead.phone}</div>}
                      <div>{lead.preferredCountry} • {lead.studyLevel}</div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="text-sm">
                      {lead.email && <div className="text-blue-600">{lead.email}</div>}
                      {lead.phone && <div>{lead.phone}</div>}
                      <div className="text-muted-foreground">{lead.currentCity}</div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{lead.preferredCountry}</TableCell>
                  <TableCell className="hidden lg:table-cell">{lead.studyLevel}</TableCell>
                  <TableCell className="hidden lg:table-cell">{lead.intakeTimeline}</TableCell>
                  <TableCell>
                    <Select
                      value={lead.status}
                      onValueChange={(value) => updateLeadStatus(lead.id, value as HeavyLead["status"])}
                    >
                      <SelectTrigger className="w-[140px] h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="NEW">New</SelectItem>
                        <SelectItem value="CONTACTED">Contacted</SelectItem>
                        <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                        <SelectItem value="QUALIFIED">Qualified</SelectItem>
                        <SelectItem value="CONVERTED">Converted</SelectItem>
                        <SelectItem value="CLOSED">Closed</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-sm text-muted-foreground">
                    {format(lead.createdAt, "MMM dd, yyyy")}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => viewDetails(lead)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
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
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Detail Dialog */}
      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Lead Details</DialogTitle>
          </DialogHeader>
          {selectedLead && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground">Name</h4>
                  <p>{selectedLead.name}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground">Status</h4>
                  {getStatusBadge(selectedLead.status)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground">Email</h4>
                  <p>{selectedLead.email || "N/A"}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground">Phone</h4>
                  <p>{selectedLead.phone || "N/A"}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground">Current City</h4>
                  <p>{selectedLead.currentCity}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground">Preferred Country</h4>
                  <p>{selectedLead.preferredCountry}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground">Study Level</h4>
                  <p>{selectedLead.studyLevel}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground">Intake Timeline</h4>
                  <p>{selectedLead.intakeTimeline}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground">Current Education</h4>
                  <p>{selectedLead.currentEducation}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground">Passport Status</h4>
                  <p>{selectedLead.passportStatus}</p>
                </div>
              </div>
              {selectedLead.aboutYourself && (
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">About</h4>
                  <p className="text-sm bg-muted p-3 rounded-md">{selectedLead.aboutYourself}</p>
                </div>
              )}
              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <span className="font-semibold">Created:</span> {format(selectedLead.createdAt, "PPpp")}
                </div>
                <div>
                  <span className="font-semibold">Updated:</span> {format(selectedLead.updatedAt, "PPpp")}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
