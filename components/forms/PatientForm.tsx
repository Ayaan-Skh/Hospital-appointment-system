"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import CustomFormField from "../ui/Custom-Form"
export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton",
  }

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export const PatientForm=()=> {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
      },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-96 flex-1">
        <div  className="mb-7">
            <h1 className="text-3xl font-bold">Hi There 🙋‍♂️👨‍⚕️</h1>
            <p>Schedule your first appointment</p>
        </div>
       <CustomFormField 
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="john Doe"
            label="Full Name"
            placeholder="Your name"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
       />
       <CustomFormField 
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="Email"
            label="Email address"
            placeholder="yourmail@gmail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="user"
       />
       <CustomFormField 
            control={form.control}
            fieldType={FormFieldType.PHONE_INPUT}
            name="Email"
            label="Phone Number"
            placeholder="91929*****"
            iconSrc="/assets/icons/email.svg"
            iconAlt="Number"
       />
        <Button type="submit" className="bg-cyan-400 hover:bg-cyan-600 hover:text-white hover:scale-110 ease-in-out">Submit</Button>
      </form>
    </Form>
  )
}


