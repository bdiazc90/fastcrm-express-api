import { Router } from "express";
import { getAllContacts } from "../controllers/contactController.js"

export const contactRoutes = Router();

contactRoutes.get("/", getAllContacts); // GET: /api/contacts/