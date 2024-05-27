import { Router } from 'express'
import { createMedal, deleteMedal, getMedal, getByIdMedal, updateMedal } from '../controllers/medal.js'
const router = Router()


router.get("/",getMedal)
router.get("/:id", getByIdMedal)
router.post("/", createMedal)
router.delete("/:id", deleteMedal)
router.put("/:id", updateMedal)

export default router