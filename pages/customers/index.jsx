import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";

const FormSchema = z.object({
  customer_name: z.string().min(1, { message: "Customer name is required" }),
  customer_email: z.string().email(),
  organization_name: z
    .string()
    .min(1, { message: "Organization name is required" }),
  organization_email: z.string().email(),
  contact: z
    .string()
    .min(1, { message: "Contact number is required" })
    .min(10, { message: "Contact number must be of 10 digits" })
    .max(10, { message: "Contact number should not be exceed 10 digits." }),
  customer_access_number: z
    .string()
    .min(1, { message: "Customer Access Number is required" })
    .min(3, { message: "Customer Access Number must be of 3 digits" })
    .max(3, {
      message: "Customer Access Number should not be exceed 3 digits.",
    }),
  country_id: z.string(),
});

const CustomerForm = () => {
  const form = useForm({
    defaultValues: {
      customer_name: "",
      customer_email: "",
      organization_name: "",
      organization_email: "",
      contact: "",
      customer_access_number: "",
      country_id: "",
    },
    resolver: zodResolver(FormSchema),
  });

  const handleCustomerForm = (values) => {
    console.log(values);
  };

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-gray-200 ">
      <div className="hidden border-r bg-muted/40 md:block">
        <Sidebar />
      </div>
      <div className=" flex justify-center items-center">
        <div className="rounded-md bg-white px-12 py-4 ">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleCustomerForm)}
              className="w-96 mx-auto space-y-4"
            >
              <FormField
                control={form.control}
                name="customer_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Customer Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="customer_email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Customer Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email address"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="organization_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="organization_email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email address"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your contact number"
                        type="tel"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="customer_access_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Customer Access Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Customer Access Number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country_id"
                render={({ field }) => (
                  <FormItem {...field}>
                    <FormLabel>Country ID</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="text-gray-500">
                          <SelectValue placeholder="Select an Option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;
