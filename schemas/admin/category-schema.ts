import { z } from "zod";

export const CategorySchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Name is required",
    })
    .max(60, {
      message: "Name is too long",
    }),
  // slug: z
  //   .string()
  //   .min(1, {
  //     message: "Slug is required",
  //   })
  //   .max(60, {
  //     message: "Slug is too long",
  //   }),
  description: z.string().max(160, {
    message: "Description is too long",
  }).optional(),
  image: z.string().optional(),
  parentId: z.string().optional(),
  titleSeo: z.string().optional(),
  descriptionSeo: z.string().optional(),
  keywordsSeo: z.string().optional(),
});
