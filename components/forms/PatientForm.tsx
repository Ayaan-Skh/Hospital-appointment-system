"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import CustomFormField from "../ui/Custom-Form"
import SubmitButton from "../ui/SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/Validation"
import { useRouter } from "next/navigation"
export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton",
  }



export const PatientForm=()=> {
    // 1. Define your form.
    const router=useRouter();
    const [isLoading,setIsLoading]=useState(false)
    const form = useForm<z.infer<typeof UserFormValidation>>({
      resolver: zodResolver(UserFormValidation),
      defaultValues: {
        username: "",
        email:"",
        phone:""
      },
    })
    async function onSubmit({username,email,phone}: z.infer<typeof UserFormValidation>) {
        setIsLoading(true)
        // try {
        //   const UserData={username,email,phone}
        //   const user=await createUser(UserData)

        //   if(user) router.push(`/patienst/${user.$id}/register`)
        // } catch (error) {
        //   console.log(error)
        // }
        // console.log(values)
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
        {/* <Button type="submit" className="bg-cyan-400 hover:bg-cyan-600 hover:text-white hover:scale-110 w-96 ease-in-out">Submit</Button> */}
        <SubmitButton isLoading={isLoading} className="w-96 bg-cyan-400 text-slate-950">Get Started</SubmitButton>
      </form>
    </Form>
  )
}


