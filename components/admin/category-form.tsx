"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CategorySchema } from "@/schemas/admin/category-schema";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useTransition } from "react";

const CategoryForm = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof CategorySchema>>({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      name: "",
    //   slug: "",
      description: "",
      image: "",
      parentId: "",
      titleSeo: "",
      descriptionSeo: "",
      keywordsSeo: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof CategorySchema>) => {
    console.log(values);
  };
  return (
    <div
    className="w-full bg-white"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input {...field} disabled={isPending} placeholder="nom" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button>Enregistrer</Button>
        </form>
      </Form>
    </div>
  );
};

export default CategoryForm;
