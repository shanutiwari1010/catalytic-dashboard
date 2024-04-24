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
  device_model: z.string().min(1, { message: "Device Model is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  firmware: z.string().min(1, { message: "Firmware Model is required" }),
  sales_channel: z.string().min(1, { message: "Sales Channel is required" }),

  serial_number: z
    .string()
    .min(1, { message: "Serial Number is required" })
    .min(9, { message: "Serial Number must be of 9 digits" })
    .max(9, { message: "Serial Number should not be exceed 9 digits." }),
  imei_number: z
    .string()
    .min(1, { message: "IMEI Number is required" })
    .min(15, { message: "IMEI Number must be of 15 digits" })
    .max(15, { message: "IMEI Number should not be exceed 15 digits." }),
  iccid_number: z
    .string()
    .min(1, { message: "ICCID Number is required" })
    .min(20, { message: "ICCID Number must be of 20 digits" })
    .max(20, { message: "ICCID Number should not be exceed 20 digits." }),
  manufacturer_id: z
    .string()
    .min(1, { message: "Manufacturer ID is required" }),
});

const DeviceForm = () => {
  const form = useForm({
    defaultValues: {
      device_model: "",
      serial_number: "",
      imei_number: "",
      iccid_number: "",
      firmware: "",
      sales_channel: "",
      manufacturer_id: "",
      description: "",
    },
    resolver: zodResolver(FormSchema),
  });

  const handleDeviceForm = (values) => {
    console.log(values);
  };

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-gray-200">
      <div className="hidden border-r bg-muted/40 md:block">
        <Sidebar />
      </div>
      <div className="h-screen flex justify-center items-center ">
        <div className="rounded-md bg-white px-12 py-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleDeviceForm)}
              className=" mx-auto space-y-4 w-96 "
            >
              <FormField
                control={form.control}
                name="device_model"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Device Model</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter device model" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              <FormField
                control={form.control}
                name="serial_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Serial Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Serial Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              <FormField
                control={form.control}
                name="imei_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>IMEI Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter IMEI Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              <FormField
                control={form.control}
                name="iccid_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ICCID Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter ICCID Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              <FormField
                control={form.control}
                name="firmware"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Firmware</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Firmware " {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              <FormField
                control={form.control}
                name="sales_channel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sales Channel</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Description " {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              <FormField
                control={form.control}
                name="manufacturer_id"
                render={({ field }) => (
                  <FormItem {...field}>
                    <FormLabel>Manufacturer ID</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="text-gray-500">
                          <SelectValue placeholder="Select an Option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="one">1</SelectItem>
                          <SelectItem value="two">2</SelectItem>
                          <SelectItem value="three">3</SelectItem>
                          <SelectItem value="four">4</SelectItem>
                          <SelectItem value="five">5</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Description " {...field} />
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

export default DeviceForm;
