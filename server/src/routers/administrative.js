import { Router } from "express";
import {
  createAdministrative,
  deleteAdministrative,
  getAllAdministrative,
  getByIdAdministrative,
  updateAdministrative,
} from "../controllers/administrative.js";
const router = Router();

router.get("/", getAllAdministrative);
router.get("/:id", getByIdAdministrative);
router.post("/", createAdministrative);
router.delete("/:id", deleteAdministrative);
router.put("/:id", updateAdministrative);

export default router;
