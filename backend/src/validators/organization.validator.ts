import { z } from "zod";

export const createOrganizationSchema = z.object({
  name: z
    .string()
    .min(2, "Organization name must be at least 2 characters long")
    .max(50, "Organization name must be at most 50 characters long"),
});

export const updateOrganizationSchema =
  createOrganizationSchema.partial();