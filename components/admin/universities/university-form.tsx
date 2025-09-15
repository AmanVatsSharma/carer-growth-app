//components/admin/universites/
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { universitySchema, UniversityFormData } from "@/lib/validators/university"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Plus } from "lucide-react"
// import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { University } from "@/prisma/generated"
import { createOrUpdateUniversity } from "@/app/(dashboard)/dashboard/universities/actions"
import { Toaster } from "@/components/ui/sonner"

type UniversityFormProps = {
  university?: University | null
  onFinished: () => void
}

export function UniversityForm({ university, onFinished }: UniversityFormProps) {
//   const { toast } = useToast()
  const router = useRouter()
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
      courses: university?.courses || [],
      tags: university?.tags || [],
      tuitionFeeFrom: university?.tuitionFeeFrom || undefined,
      tuitionFeeTo: university?.tuitionFeeTo || undefined,
      qsRanking: university?.qsRanking || undefined,
      intakeSeasons: university?.intakeSeasons || [],
      galleryImageUrls: university?.galleryImageUrls || [],
    },
  })

  async function onSubmit(data: UniversityFormData) {
    const result = await createOrUpdateUniversity(data)
    if (result.success) {
    //   Toaster({
    //     title: `University ${data.id ? "updated" : "created"} successfully.`,
    //   })
      onFinished()
      router.refresh()
    } else {
    //   toast({
    //     title: "An error occurred.",
    //     description: typeof result.error === 'string' ? result.error : "Please check the form for errors.",
    //     variant: "destructive",
    //   })
    console.log(result.error, "error")
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Essential university details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
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
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input placeholder="https://www.university.edu" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="shortDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Brief description of the university" {...field} />
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
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Detailed description of the university"
                      rows={4}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Images */}
        <Card>
          <CardHeader>
            <CardTitle>Images</CardTitle>
            <CardDescription>University logos and images</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="logoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Logo URL</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., /universities/university-logo.png" {...field} />
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
                    <Input placeholder="e.g., /universities/campus-image.png" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>University contact details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="contact.email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="contact@university.edu" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact.phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="+1 (555) 123-4567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact.address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="University address"
                      rows={3}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Rankings & Fees */}
        <Card>
          <CardHeader>
            <CardTitle>Rankings & Fees</CardTitle>
            <CardDescription>University rankings and tuition information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="qsRanking"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>QS World Ranking</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      placeholder="e.g., 33" 
                      {...field}
                      onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="tuitionFeeFrom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tuition Fee From (USD)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="e.g., 25000" 
                        {...field}
                        onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tuitionFeeTo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tuition Fee To (USD)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="e.g., 45000" 
                        {...field}
                        onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* Services */}
        <Card>
          <CardHeader>
            <CardTitle>Services</CardTitle>
            <CardDescription>Services provided by IPD Education</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
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
                      <FormLabel>Accommodation Support</FormLabel>
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
                      <FormLabel>Forex Support</FormLabel>
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
                      <FormLabel>Counselling Support</FormLabel>
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
          </CardContent>
        </Card>

        {/* Exams */}
        <Card>
          <CardHeader>
            <CardTitle>Exams</CardTitle>
            <CardDescription>Accepted exams for admission</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="exams"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Exams</FormLabel>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {field.value?.map((exam, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          {exam}
                          <X 
                            className="h-3 w-3 cursor-pointer" 
                            onClick={() => {
                              const newExams = field.value?.filter((_, i) => i !== index) || []
                              field.onChange(newExams)
                            }}
                          />
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input 
                        placeholder="Add exam (e.g., IELTS, TOEFL, GRE)"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault()
                            const value = e.currentTarget.value.trim()
                            if (value && !field.value?.includes(value)) {
                              field.onChange([...(field.value || []), value])
                              e.currentTarget.value = ''
                            }
                          }
                        }}
                      />
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          const input = document.querySelector('input[placeholder*="Add exam"]') as HTMLInputElement
                          const value = input?.value.trim()
                          if (value && !field.value?.includes(value)) {
                            field.onChange([...(field.value || []), value])
                            input.value = ''
                          }
                        }}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Tags */}
        <Card>
          <CardHeader>
            <CardTitle>Tags</CardTitle>
            <CardDescription>University tags for categorization</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {field.value?.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          {tag}
                          <X 
                            className="h-3 w-3 cursor-pointer" 
                            onClick={() => {
                              const newTags = field.value?.filter((_, i) => i !== index) || []
                              field.onChange(newTags)
                            }}
                          />
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input 
                        placeholder="Add tag (e.g., Research, Engineering, Business)"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault()
                            const value = e.currentTarget.value.trim()
                            if (value && !field.value?.includes(value)) {
                              field.onChange([...(field.value || []), value])
                              e.currentTarget.value = ''
                            }
                          }
                        }}
                      />
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          const input = document.querySelector('input[placeholder*="Add tag"]') as HTMLInputElement
                          const value = input?.value.trim()
                          if (value && !field.value?.includes(value)) {
                            field.onChange([...(field.value || []), value])
                            input.value = ''
                          }
                        }}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Intake Seasons */}
        <Card>
          <CardHeader>
            <CardTitle>Intake Seasons</CardTitle>
            <CardDescription>Available intake periods</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="intakeSeasons"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Intake Seasons</FormLabel>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {field.value?.map((season, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          {season}
                          <X 
                            className="h-3 w-3 cursor-pointer" 
                            onClick={() => {
                              const newSeasons = field.value?.filter((_, i) => i !== index) || []
                              field.onChange(newSeasons)
                            }}
                          />
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input 
                        placeholder="Add season (e.g., Fall, Spring, Summer)"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault()
                            const value = e.currentTarget.value.trim()
                            if (value && !field.value?.includes(value)) {
                              field.onChange([...(field.value || []), value])
                              e.currentTarget.value = ''
                            }
                          }
                        }}
                      />
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          const input = document.querySelector('input[placeholder*="Add season"]') as HTMLInputElement
                          const value = input?.value.trim()
                          if (value && !field.value?.includes(value)) {
                            field.onChange([...(field.value || []), value])
                            input.value = ''
                          }
                        }}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Courses */}
        <Card>
          <CardHeader>
            <CardTitle>Courses</CardTitle>
            <CardDescription>Available courses and programs</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="courses"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Courses</FormLabel>
                  <div className="space-y-4">
                    {field.value?.map((course, index) => (
                      <div key={index} className="border rounded-lg p-4 space-y-3">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">Course {index + 1}</h4>
                          <Button 
                            type="button" 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              const newCourses = field.value?.filter((_, i) => i !== index) || []
                              field.onChange(newCourses)
                            }}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <FormField
                            control={form.control}
                            name={`courses.${index}.name`}
                            render={({ field: courseField }) => (
                              <FormItem>
                                <FormLabel>Course Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g., Computer Science" {...courseField} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`courses.${index}.level`}
                            render={({ field: courseField }) => (
                              <FormItem>
                                <FormLabel>Level</FormLabel>
                                <FormControl>
                                  <select 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    {...courseField}
                                  >
                                    <option value="">Select Level</option>
                                    <option value="Undergraduate">Undergraduate</option>
                                    <option value="Postgraduate">Postgraduate</option>
                                    <option value="Diploma">Diploma</option>
                                    <option value="Certificate">Certificate</option>
                                  </select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <FormField
                            control={form.control}
                            name={`courses.${index}.duration`}
                            render={({ field: courseField }) => (
                              <FormItem>
                                <FormLabel>Duration</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g., 4 years" {...courseField} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`courses.${index}.tuitionPerYearUSD`}
                            render={({ field: courseField }) => (
                              <FormItem>
                                <FormLabel>Tuition per Year (USD)</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="number" 
                                    placeholder="e.g., 30000" 
                                    {...courseField}
                                    onChange={(e) => courseField.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name={`courses.${index}.eligibility`}
                          render={({ field: courseField }) => (
                            <FormItem>
                              <FormLabel>Eligibility</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Eligibility requirements"
                                  rows={2}
                                  {...courseField} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    ))}
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        field.onChange([...(field.value || []), {
                          name: '',
                          level: 'Undergraduate',
                          duration: '',
                          tuitionPerYearUSD: undefined,
                          eligibility: ''
                        }])
                      }}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Course
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Gallery Images */}
        <Card>
          <CardHeader>
            <CardTitle>Gallery Images</CardTitle>
            <CardDescription>Additional university images</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="galleryImageUrls"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gallery Image URLs</FormLabel>
                  <div className="space-y-2">
                    <div className="space-y-2">
                      {field.value?.map((url, index) => (
                        <div key={index} className="flex gap-2">
                          <Input 
                            value={url}
                            onChange={(e) => {
                              const newUrls = [...(field.value || [])]
                              newUrls[index] = e.target.value
                              field.onChange(newUrls)
                            }}
                            placeholder="Image URL"
                          />
                          <Button 
                            type="button" 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              const newUrls = field.value?.filter((_, i) => i !== index) || []
                              field.onChange(newUrls)
                            }}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        field.onChange([...(field.value || []), ''])
                      }}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Image URL
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end pt-6">
          <Button type="submit" disabled={form.formState.isSubmitting} size="lg">
            {form.formState.isSubmitting ? "Saving..." : university ? "Update University" : "Create University"}
          </Button>
        </div>
      </form>
    </Form>
  )
}