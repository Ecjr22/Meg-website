import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const result = contactFormSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          message: validationError.message 
        });
      }

      const submission = await storage.createContactSubmission(result.data);
      
      return res.status(201).json({ 
        message: "Thank you for your message! I will get back to you soon.",
        id: submission.id 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ 
        message: "Something went wrong. Please try again later." 
      });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      return res.json(submissions);
    } catch (error) {
      console.error("Error fetching submissions:", error);
      return res.status(500).json({ message: "Failed to fetch submissions" });
    }
  });

  return httpServer;
}
