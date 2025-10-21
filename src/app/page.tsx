'use client'
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from 'react-hook-form';

export default function Page() {
  const form = useForm({
    defaultValues: {
      email: '',
      name: '',
      password: '',
    }
  });

  const HandleSubmit = (values: { name: string, email: string, password: string }) => {
    alert(values.name);
  }

  return (
    <div>
      <h1>Form</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(HandleSubmit)} className="space-y-5">

          {/* name input  */}
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name:</FormLabel>
                <FormControl>
                  <Input required type="text" {...field} ></Input>
                </FormControl>
                <FormDescription>enter your full name</FormDescription>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          >
          </FormField>

          {/* name input  */}
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Email:</FormLabel>
                <FormControl>
                  <Input required type="text" {...field} ></Input>
                </FormControl>
                <FormDescription>enter your email</FormDescription>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          >
          </FormField>

          {/* name input  */}
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Password:</FormLabel>
                <FormControl>
                  <Input required type="password" {...field} ></Input>
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          >
          </FormField>
          <Button type="submit" className="bg-violet-700">Submit</Button>
        </form>
      </Form>


    </div>
  );
};
