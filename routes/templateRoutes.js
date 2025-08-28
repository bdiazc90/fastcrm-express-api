import { Router } from "express";
import { createTemplate, getAllTemplates, updateTemplate } from "../controllers/templateController.js"

export const templateRoutes = Router();

templateRoutes.get("/", getAllTemplates); // GET: /api/templates/
templateRoutes.post("/", createTemplate); // POST: /api/templates/
templateRoutes.put("/:id", updateTemplate); // PUT: /api/templates/:id