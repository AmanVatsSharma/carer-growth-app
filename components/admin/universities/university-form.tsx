//components/admin/universites/
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { universitySchema, UniversityFormData } from "@/lib/validators/university"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>University Name</FormLabel>
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
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input placeholder="e.g., university-of-melbourne" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Australia" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
                <textarea 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Detailed description of the university"
                  rows={4}
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {university ? "Update University" : "Create University"}
        </Button>
      </form>
    </Form>
  )
}