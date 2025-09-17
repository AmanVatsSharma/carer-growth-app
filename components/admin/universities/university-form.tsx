//components/admin/universites/
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { universitySchema, UniversityFormData } from "@/lib/validators/university"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useRouter } from "next/navigation"
import { University } from "@/prisma/generated"
import { createOrUpdateUniversity } from "@/app/(dashboard)/dashboard/universities/actions"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

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
      website: university?.website || "",
      visaSupport: university?.visaSupport || false,
      accommodation: university?.accommodation || false,
      // ... set defaults for other fields
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
        {/* ... Add FormFields for all other properties ... */}
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {university ? "Update University" : "Create University"}
        </Button>
      </form>
    </Form>
  )
}