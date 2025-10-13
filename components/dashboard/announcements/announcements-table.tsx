"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { Trash2, Edit, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { createOrUpdateAnnouncement, deleteAnnouncement } from "@/app/(dashboard)/dashboard/announcements/actions"
import { useRouter } from "next/navigation"

interface Announcement {
  id: string
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
}

export function AnnouncementsTable() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null)
  const [formData, setFormData] = useState({ title: "", content: "" })
  const [isSaving, setIsSaving] = useState(false)
  const router = useRouter()

  useEffect(() => {
    fetchAnnouncements()
  }, [])

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch("/api/announcements")
      if (response.ok) {
        const data = await response.json()
        setAnnouncements(
          data.map((announcement: any) => ({
            ...announcement,
            createdAt: new Date(announcement.createdAt),
            updatedAt: new Date(announcement.updatedAt),
          })),
        )
      }
    } catch (error) {
      toast.error("Failed to fetch announcements")
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (announcement: Announcement) => {
    setSelectedAnnouncement(announcement)
    setFormData({ title: announcement.title, content: announcement.content })
    setIsModalOpen(true)
  }

  const handleAdd = () => {
    setSelectedAnnouncement(null)
    setFormData({ title: "", content: "" })
    setIsModalOpen(true)
  }

  const handleSave = async () => {
    if (!formData.title || !formData.content) {
      toast.error("Please fill in all fields")
      return
    }

    setIsSaving(true)
    const result = await createOrUpdateAnnouncement({
      id: selectedAnnouncement?.id,
      ...formData,
    })

    if (result.success) {
      toast.success(`Announcement ${selectedAnnouncement ? "updated" : "created"} successfully`)
      setIsModalOpen(false)
      router.refresh()
      fetchAnnouncements()
    } else {
      toast.error("Failed to save announcement")
    }
    setIsSaving(false)
  }

  const handleDelete = async (id: string) => {
    await deleteAnnouncement(id)
    toast.success("Announcement deleted successfully")
    router.refresh()
    fetchAnnouncements()
  }

  if (loading) {
    return <div className="text-center py-8">Loading announcements...</div>
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={handleAdd}>
          <Plus className="h-4 w-4 mr-2" />
          Add Announcement
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[180px] md:w-[300px]">Title</TableHead>
              <TableHead className="hidden md:table-cell">Content</TableHead>
              <TableHead className="hidden lg:table-cell">Created</TableHead>
              <TableHead className="hidden lg:table-cell">Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {announcements.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                  No announcements found. Click &quot;Add Announcement&quot; to create one.
                </TableCell>
              </TableRow>
            ) : (
              announcements.map((announcement) => (
                <TableRow key={announcement.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">
                    {announcement.title}
                    <div className="md:hidden text-xs text-muted-foreground mt-1 truncate">
                      {announcement.content}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell max-w-md truncate">{announcement.content}</TableCell>
                  <TableCell className="hidden lg:table-cell text-sm text-muted-foreground">
                    {format(announcement.createdAt, "MMM dd, yyyy")}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-sm text-muted-foreground">
                    {format(announcement.updatedAt, "MMM dd, yyyy")}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(announcement)}
                      >
                        <Edit className="h-4 w-4" />
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
                            <AlertDialogTitle>Delete Announcement</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete this announcement? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(announcement.id)}
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

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedAnnouncement ? "Edit Announcement" : "Add Announcement"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter announcement title"
              />
            </div>
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Enter announcement content"
                rows={4}
              />
            </div>
            <Button onClick={handleSave} disabled={isSaving} className="w-full">
              {isSaving ? "Saving..." : "Save"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
