import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form schema
export const contactFormSchema = z.object({
  parentName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  childAgeGrade: z.string().min(1, "Please enter your child's age or grade"),
  areasOfConcern: z.array(z.string()).min(1, "Please select at least one area of concern"),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export interface ContactSubmission extends ContactFormData {
  id: string;
  submittedAt: string;
}

// Areas of concern options
export const areasOfConcernOptions = [
  "Dyslexia Support",
  "Foundational Literacy Skills",
  "Reading Intervention",
  "Spelling and Writing",
  "Reading Comprehension",
  "Other",
] as const;
