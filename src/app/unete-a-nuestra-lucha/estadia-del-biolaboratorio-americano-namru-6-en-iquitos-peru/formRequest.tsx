"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Select from 'react-select';

import { useEffect, useState } from "react"

const FormSchema = z.object({
  names: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  lastname: z.string().min(2, {
    message: "El apellido debe tener al menos 2 caracteres.",
  }),
  email :z.string().email({
    message: "El correo electrónico debe ser válido.",
  }),
  city: z.string().min(2, {
    message: "La ciudad debe tener al menos 2 caracteres.",
  }),
  country: z.string().min(2, {
    message: "El país debe tener al menos 2 caracteres.",
  }),
})



export const FormRequest = ({options}:any)=> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      names: "",
      lastname: "",
      email: "",
      city:""
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }
  const changeHandler = (value:any) => {
    console.log(value)
  }
  const countrySchema = z.object({
    label: z.string(),
    value: z.string(),
  });
  type Countries = z.infer<typeof countrySchema>;
  type TSelectOption = {
    value: string;
    label: string;
};

 
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
      <FormField
        control={form.control}
        name="names"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre</FormLabel>
            <FormControl>
              <Input placeholder="Ingrese su nombre" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lastname"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Apellido</FormLabel>
            <FormControl>
              <Input placeholder="Ingrese su apellido" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Correo</FormLabel>
            <FormControl>
              <Input placeholder="Ingrese el correo electrónico" {...field} />
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
            <FormLabel>Ciudad</FormLabel>
            <FormControl>
              <Input placeholder="Ingrese la ciudad" {...field} />
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
            <FormLabel>País</FormLabel>
            <FormControl>
              <Select options={options} {...field} value={''} onChange={changeHandler}/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Enviar</Button>
    </form>
  </Form>
  )
}