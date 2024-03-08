"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { 
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select"
import { Button } from "../components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form"
import { Input } from "../components/ui/input"
import { Checkbox } from "../components/ui/checkbox"
import { Calendar } from "../components/ui/calendar"
import { Switch } from "../components/ui/switch"
import { Label } from "../components/ui/label"


const formSchema = z.object({
  drosAudit: z.boolean().default(true),
  drosCancel: z.boolean().default(false),
  username: z.string().min(2),
  emailAddress: z.string().email(),
  password: z.string().min(6),
  passwordConfirmation: z.string(),
  accountType: z.enum(["personal", "business"]),
  companyName: z.string().optional(),
})
.refine((data) => {
   return data.password === data.passwordConfirmation
}, {
    message: "Passwords do not match.",
    path: ["passwordConfirmation"],
})
.refine((data) => {
   if(data.accountType === "business"){
    return data.companyName !== null
   }
   return true
}, {
    message: "Company name is required.",
    path: ["companyName"],
})

function AuditForm() {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        drosAudit: true,
        drosCancel: false,
        username: "",
        emailAddress: "",
        password: "",
        passwordConfirmation: "",
        accountType: "personal",
        companyName: "",
      },
    })

    const accountType = form.watch("accountType")

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
      console.log(values)
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col justify-center mx-auto p-4 space-y-8 max-w-md">
      <FormField
              control={form.control}
              name="drosAudit"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      DROS Or Consignment Audits
                    </FormLabel>
                    <FormDescription>
                      Select Your Audit
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="drosAudit"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
      <FormField
          control={form.control}
          name="drosCancel"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4">
              <FormControl>
                <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
              <FormLabel>Cancelled DROS</FormLabel>
              <FormDescription>
                Select When DROS Was Cancelled
              </FormDescription>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="kozyguns" 
                type="username"
                {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@example.com" 
                type="email" 
                {...field} />
              </FormControl>
              <FormDescription>
                Shoot me an email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="accountType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account Type</FormLabel>
              <Select onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger>
                <SelectValue placeholder="Select An Account Type" {...field}/>
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="personal">Personal</SelectItem>
                <SelectItem value="business">Business</SelectItem>
              </SelectContent>
              </Select>
              <FormDescription>
                Select An Account Type.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {accountType === "business" &&
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="Kozy Guns" 
                {...field} />
              </FormControl>
              <FormDescription>
                Company Name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
          }
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" 
                type="password" 
                {...field} />
              </FormControl>
              <FormDescription>
                Enter Your Password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordConfirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password Confirmation</FormLabel>
              <FormControl>
                <Input placeholder="Password Confirmation" 
                type="password" 
                {...field} />
              </FormControl>
              <FormDescription>
                Enter Your Password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default AuditForm;
