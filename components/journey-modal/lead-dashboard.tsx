"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Search, Eye, Trash2, Users, TrendingUp, Clock, CheckCircle } from "lucide-react"
import { format } from "date-fns"

interface Lead {
  id: string
  createdAt: string
  updatedAt: string
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
}

const STATUS_COLORS = {
  NEW: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  CONTACTED: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  IN_PROGRESS: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  QUALIFIED: "bg-green-500/10 text-green-500 border-green-500/20",
  CONVERTED: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  CLOSED: "bg-gray-500/10 text-gray-500 border-gray-500/20",
}

export function LeadDashboard() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchLeads()
  }, [])

  useEffect(() => {
    let filtered = leads

    if (searchTerm) {
      filtered = filtered.filter(
        (lead) =>
          lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lead.currentCity.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lead.preferredCountry.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((lead) => lead.status === statusFilter)
    }

    setFilteredLeads(filtered)
  }, [leads, searchTerm, statusFilter])

  const fetchLeads = async () => {
    try {
      const response = await fetch("/api/heavyleads")
      const data = await response.json()
      setLeads(data)
      setFilteredLeads(data)
    } catch (error) {
      console.error("Error fetching leads:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateLeadStatus = async (leadId: string, status: string) => {
    try {
      const response = await fetch(`/api/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      })

      if (response.ok) {
        fetchLeads()
      }
    } catch (error) {
      console.error("Error updating lead status:", error)
    }
  }

  const updateLeadNotes = async (leadId: string, notes: string) => {
    try {
      const response = await fetch(`/api/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes }),
      })

      if (response.ok) {
        fetchLeads()
        setSelectedLead(null)
      }
    } catch (error) {
      console.error("Error updating lead notes:", error)
    }
  }

  const deleteLead = async (leadId: string) => {
    if (!confirm("Are you sure you want to delete this lead?")) return

    try {
      const response = await fetch(`/api/leads/${leadId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        fetchLeads()
      }
    } catch (error) {
      console.error("Error deleting lead:", error)
    }
  }

  const getStatusCounts = () => {
    const counts = {
      total: leads.length,
      new: leads.filter((l) => l.status === "NEW").length,
      inProgress: leads.filter((l) => l.status === "IN_PROGRESS").length,
      converted: leads.filter((l) => l.status === "CONVERTED").length,
    }
    return counts
  }

  const statusCounts = getStatusCounts()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading leads...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">Total Leads</CardTitle>
            <Users className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold">{statusCounts.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">New Leads</CardTitle>
            <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold">{statusCounts.new}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">In Progress</CardTitle>
            <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold">{statusCounts.inProgress}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">Converted</CardTitle>
            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold">{statusCounts.converted}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Lead Management</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Manage and track all your study abroad leads
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 min-h-[48px] text-base"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full min-h-[48px]">
                <SelectValue placeholder="Filter by status" />
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

          <div className="rounded-md border overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[120px]">Name</TableHead>
                    <TableHead className="min-w-[140px] hidden sm:table-cell">Contact</TableHead>
                    <TableHead className="min-w-[100px]">Destination</TableHead>
                    <TableHead className="min-w-[100px] hidden md:table-cell">Study Level</TableHead>
                    <TableHead className="min-w-[120px]">Status</TableHead>
                    <TableHead className="min-w-[100px] hidden lg:table-cell">Created</TableHead>
                    <TableHead className="min-w-[100px]">Actions</TableHead>
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
                      <TableRow key={lead.id}>
                        <TableCell className="font-medium">
                          <div>
                            <div className="font-medium">{lead.name}</div>
                            <div className="text-xs text-muted-foreground sm:hidden">{lead.email || lead.phone}</div>
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <div className="text-sm">
                            {lead.email && <div className="truncate max-w-[120px]">{lead.email}</div>}
                            {lead.phone && <div className="text-muted-foreground">{lead.phone}</div>}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div className="font-medium">{lead.preferredCountry}</div>
                            <div className="text-xs text-muted-foreground md:hidden">{lead.studyLevel}</div>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{lead.studyLevel}</TableCell>
                        <TableCell>
                          <Select value={lead.status} onValueChange={(value) => updateLeadStatus(lead.id, value)}>
                            <SelectTrigger className="w-28 sm:w-32 min-h-[36px]">
                              <Badge variant="outline" className={`${STATUS_COLORS[lead.status]} text-xs`}>
                                {lead.status.replace("_", " ")}
                              </Badge>
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
                        <TableCell className="hidden lg:table-cell text-sm">
                          {format(new Date(lead.createdAt), "MMM dd, yyyy")}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 sm:gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => setSelectedLead(lead)}
                                  className="h-8 w-8 sm:h-9 sm:w-9 touch-manipulation"
                                >
                                  <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl max-h-[90vh] mx-4 overflow-y-auto rounded-xl">
                                <DialogHeader>
                                  <DialogTitle className="text-lg sm:text-xl">Lead Details - {lead.name}</DialogTitle>
                                </DialogHeader>
                                {selectedLead && (
                                  <div className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                      <div>
                                        <Label className="text-sm font-medium">Name</Label>
                                        <p className="text-sm text-muted-foreground">{selectedLead.name}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">Email</Label>
                                        <p className="text-sm text-muted-foreground break-all">
                                          {selectedLead.email || "Not provided"}
                                        </p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">Phone</Label>
                                        <p className="text-sm text-muted-foreground">
                                          {selectedLead.phone || "Not provided"}
                                        </p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">Current City</Label>
                                        <p className="text-sm text-muted-foreground">{selectedLead.currentCity}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">Preferred Country</Label>
                                        <p className="text-sm text-muted-foreground">{selectedLead.preferredCountry}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">Intake Timeline</Label>
                                        <p className="text-sm text-muted-foreground">{selectedLead.intakeTimeline}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">Study Level</Label>
                                        <p className="text-sm text-muted-foreground">{selectedLead.studyLevel}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">Current Education</Label>
                                        <p className="text-sm text-muted-foreground">{selectedLead.currentEducation}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">Passport Status</Label>
                                        <p className="text-sm text-muted-foreground">{selectedLead.passportStatus}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">Status</Label>
                                        <Badge variant="outline" className={STATUS_COLORS[selectedLead.status]}>
                                          {selectedLead.status.replace("_", " ")}
                                        </Badge>
                                      </div>
                                    </div>
                                    {selectedLead.aboutYourself && (
                                      <div>
                                        <Label className="text-sm font-medium">About</Label>
                                        <p className="text-sm text-muted-foreground mt-1">
                                          {selectedLead.aboutYourself}
                                        </p>
                                      </div>
                                    )}
                                    <div>
                                      <Label htmlFor="notes" className="text-sm font-medium">
                                        Notes
                                      </Label>
                                      <Textarea
                                        id="notes"
                                        defaultValue={selectedLead.notes || ""}
                                        placeholder="Add notes about this lead..."
                                        className="mt-1 min-h-[80px] text-base resize-none"
                                        rows={3}
                                      />
                                      <Button
                                        className="mt-2 w-full sm:w-auto min-h-[44px] touch-manipulation"
                                        onClick={() => {
                                          const textarea = document.getElementById("notes") as HTMLTextAreaElement
                                          updateLeadNotes(selectedLead.id, textarea.value)
                                        }}
                                      >
                                        Save Notes
                                      </Button>
                                    </div>
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => deleteLead(lead.id)}
                              className="text-destructive hover:text-destructive h-8 w-8 sm:h-9 sm:w-9 touch-manipulation"
                            >
                              <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
