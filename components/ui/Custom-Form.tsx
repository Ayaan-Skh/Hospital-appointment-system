"use client"
import React from 'react'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control, Field } from 'react-hook-form'
import { FormFieldType } from '../forms/PatientForm'
import Image from 'next/image'
import 'react-phone-number-input/style.css'
import PhoneInput, { Value } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'


interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: string,
    dateInputs?: string,
    showTimeSelect?: string,
    children?: React.ReactNode,
    RenderSkeleton?: (Field: any) => React.ReactNode

}

const RenderField = ({ field, props }: { field: any, props: CustomProps }) => {
    const { iconAlt, iconSrc, fieldType, placeholder, name } = props

    switch (fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className='rounded-md flex border-b-2 bg-slate-900'>
                    {iconSrc && (
                        <Image
                            src={iconSrc}
                            height={24}
                            width={24}
                            alt={iconAlt || "icon"}
                            className="mx-2"
                        />
                    )}
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            // {...field}
                            className='border-0'
                        />
                    </FormControl>
                </div>
            )
            break;

        case FormFieldType.PHONE_INPUT:
            return (

                <FormControl>
                    <PhoneInput
                        defaultCountry="US"
                        placeholder={props.placeholder}
                        international
                        withCountryCallingCode
                        // value={field.value as E164Number | undefined}
                        onChange={field.onChange}
                        className="input-phone bg-slate-900 h-10 rounded-md border-b-2 pl-2"
                    />
                </FormControl>

            )
            break;


        default:
            break;
    }

}

const CustomFormField = (props: CustomProps) => {
    const { control, fieldType, name, label } = props
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className='flex-1'>
                    {fieldType !== FormFieldType.CHECKBOX && label && (
                        <FormLabel>{label}</FormLabel>
                    )}
                    <RenderField
                        field={field}
                        props={props}
                    />
                    <FormMessage className='shad-error' />
                </FormItem>
            )}
        />
    )
}

export default CustomFormField
