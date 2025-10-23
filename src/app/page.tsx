"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ImagePlus, X } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  password: string;
  images: File[];
};

export default function Page() {
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      images: [],
    },
  });

  const [previews, setPreviews] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    // Set form value manually
    form.setValue("images", files, { shouldValidate: true });

    // Create preview URLs
    const urls = files.map((f) => URL.createObjectURL(f));
    setPreviews(urls);
  };

  const removeImage = (index: number) => {
    const currentFiles = form.getValues("images") || [];
    const newFiles = currentFiles.filter((_, i) => i !== index);
    form.setValue("images", newFiles);

    const newPreviews = previews.filter((_, i) => i !== index);
    setPreviews(newPreviews);
  };

  const onSubmit = (values: FormValues) => {
    console.log(values);
    alert(`Uploaded ${values.images.length} image(s)`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl bg-white shadow-sm">
      <h1 className="text-2xl font-semibold mb-5 text-gray-700">Form with File Upload</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormDescription>Enter your full name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" type="email" {...field} />
                </FormControl>
                <FormDescription>Enter a valid email address</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="********" type="password" {...field} />
                </FormControl>
                <FormDescription>Must be at least 8 characters</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* File Upload */}
          <FormField
            control={form.control}
            name="images"
            render={() => (
              <FormItem>
                <FormLabel>Upload Images</FormLabel>
                <FormControl>
                  <label
                    htmlFor="images"
                    className="border-2 border-dashed border-violet-400 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-violet-600 transition"
                  >
                    <ImagePlus className="h-10 w-10 text-violet-500 mb-2" />
                    <p className="text-violet-700">Click or drag to upload images</p>
                    <input
                      id="images"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                </FormControl>
                <FormDescription>You can upload up to 6 images</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Image Previews */}
          {previews.length > 0 && (
            <div className="grid grid-cols-3 gap-2">
              {previews.map((src, idx) => (
                <div key={idx} className="relative">
                  <img
                    src={src}
                    alt={`preview-${idx}`}
                    className="w-full h-[100px] object-cover rounded-lg border"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(idx)}
                    className="absolute top-1 right-1 bg-white rounded-full p-1 shadow"
                  >
                    <X size={14} color="red" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <Button type="submit" className="bg-violet-700 hover:bg-violet-600 w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
