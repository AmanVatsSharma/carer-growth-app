//components/admin/universities/university-form.tsx
"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { universitySchema, UniversityFormData } from "@/lib/validators/university"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form"
import { useRouter } from "next/navigation"
import { University } from "@prisma/client"
import { createOrUpdateUniversity } from "@/app/(dashboard)/dashboard/universities/actions"
import { toast } from "sonner"
import { Plus, Trash2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

type UniversityFormProps = {
  university?: University | null
  onFinished: () => void
}

const COMMON_EXAMS = ["IELTS", "TOEFL", "PTE", "SAT", "ACT", "GRE", "GMAT", "Duolingo"]
const COURSE_LEVELS = ["Undergraduate", "Postgraduate", "Diploma", "Certificate"]

export function UniversityForm({ university, onFinished }: UniversityFormProps) {
  const router = useRouter()
  const [examInput, setExamInput] = useState("")
  const [tagInput, setTagInput] = useState("")
  
  // Parse courses from JSON if they exist
  const parsedCourses = university?.courses ? (university.courses as any[]) : []

  const form = useForm<UniversityFormData>({
    resolver: zodResolver(universitySchema),
    defaultValues: {
      id: university?.id || undefined,
      name: university?.name || "",
      slug: university?.slug || "",
      country: university?.country || "",
      city: university?.city || "",
      logoUrl: university?.logoUrl || "",
      heroImageUrl: university?.heroImageUrl || "",
      shortDescription: university?.shortDescription || "",
      description: university?.description || "",
      website: university?.website || "",
      contact: university?.contact || {},
      exams: university?.exams || [],
      visaSupport: university?.visaSupport || false,
      accommodation: university?.accommodation || false,
      forex: university?.forex || false,
      counselling: university?.counselling || false,
      applicationFeeWaiver: university?.applicationFeeWaiver || false,
      scholarshipsHelp: university?.scholarshipsHelp || false,
      courses: parsedCourses,
      tags: university?.tags || [],
    },
  })

  async function onSubmit(data: UniversityFormData) {
    const result = await createOrUpdateUniversity(data)
    if (result.success) {
      toast.success(`University ${data.id ? "updated" : "created"} successfully.`)
      onFinished()
      router.refresh()
    } else {
      toast.error(
        typeof result.error === "string"
          ? result.error
          : "Please check the form for errors."
      )
    }
  }

  const addExam = () => {
    if (examInput && !form.getValues("exams").includes(examInput)) {
      form.setValue("exams", [...form.getValues("exams"), examInput])
      setExamInput("")
    }
  }

  const removeExam = (exam: string) => {
    form.setValue("exams", form.getValues("exams").filter(e => e !== exam))
  }

  const addTag = () => {
    if (tagInput && !form.getValues("tags").includes(tagInput)) {
      form.setValue("tags", [...form.getValues("tags"), tagInput])
      setTagInput("")
    }
  }

  const removeTag = (tag: string) => {
    form.setValue("tags", form.getValues("tags").filter(t => t !== tag))
  }

  const addCourse = () => {
    form.setValue("courses", [
      ...form.getValues("courses"),
      { name: "", level: "Undergraduate" as const, duration: "", tuitionPerYearUSD: 0, eligibility: "" }
    ])
  }

  const removeCourse = (index: number) => {
    form.setValue("courses", form.getValues("courses").filter((_, i) => i !== index))
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-4">
        {/* Basic Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Basic Information</h3>
          
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>University Name *</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., University of Melbourne" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug *</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., university-of-melbourne" {...field} />
                </FormControl>
                <FormDescription>URL-friendly identifier (use hyphens, lowercase)</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Australia" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Melbourne" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="shortDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Short Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="A brief description (1-2 sentences)" {...field} rows={2} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Detailed description of the university" {...field} rows={4} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://www.university.edu" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="logoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Logo URL</FormLabel>
                  <FormControl>
                    <Input placeholder="/universities/logo.png" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="heroImageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hero Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="/universities/hero.png" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Accepted Exams */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Accepted Exams</h3>
          <div className="flex gap-2">
            <Input
              value={examInput}
              onChange={(e) => setExamInput(e.target.value)}
              placeholder="Type exam name or select below"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addExam())}
            />
            <Button type="button" onClick={addExam}>Add</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {COMMON_EXAMS.map(exam => (
              <Button
                key={exam}
                type="button"
                variant={form.watch("exams").includes(exam) ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  if (form.watch("exams").includes(exam)) {
                    removeExam(exam)
                  } else {
                    form.setValue("exams", [...form.getValues("exams"), exam])
                  }
                }}
              >
                {exam}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {form.watch("exams").map(exam => (
              <Badge key={exam} variant="secondary">
                {exam}
                <button type="button" onClick={() => removeExam(exam)} className="ml-2">×</button>
              </Badge>
            ))}
          </div>
        </div>

        {/* IPD Services */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">IPD Education Services</h3>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="visaSupport"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Visa Support</FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="accommodation"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Accommodation Help</FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="forex"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Forex Services</FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="counselling"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Counselling</FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="applicationFeeWaiver"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Application Fee Waiver</FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="scholarshipsHelp"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Scholarships Help</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Courses */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Courses</h3>
            <Button type="button" onClick={addCourse} variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" /> Add Course
            </Button>
          </div>
          {form.watch("courses").map((course, index) => (
            <div key={index} className="border p-4 rounded-md space-y-4 relative">
              <Button
                type="button"
                onClick={() => removeCourse(index)}
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              
              <FormField
                control={form.control}
                name={`courses.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Bachelor of Science" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name={`courses.${index}.level`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Level</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {COURSE_LEVELS.map(level => (
                            <SelectItem key={level} value={level}>{level}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`courses.${index}.duration`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Duration</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 3 years" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name={`courses.${index}.tuitionPerYearUSD`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tuition per Year (USD)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="e.g., 35000" 
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`courses.${index}.eligibility`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Eligibility</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., IELTS 6.5 overall" {...field} rows={2} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Tags</h3>
          <div className="flex gap-2">
            <Input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder="Add tags (e.g., Research, Top Ranked)"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
            />
            <Button type="button" onClick={addTag}>Add</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {form.watch("tags").map(tag => (
              <Badge key={tag} variant="secondary">
                {tag}
                <button type="button" onClick={() => removeTag(tag)} className="ml-2">×</button>
              </Badge>
            ))}
          </div>
        </div>

        <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
          {form.formState.isSubmitting ? "Saving..." : university ? "Update University" : "Create University"}
        </Button>
      </form>
    </Form>
  )
}
