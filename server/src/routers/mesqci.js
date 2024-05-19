import { Router } from 'express'
import { createMesqci, deleteMesqci, getAllMesqci, getByIdMesqci, updateMesqci } from '../controllers/mesqci.js'
const router = Router()


router.get("/",getAllMesqci)
router.get("/:id", getByIdMesqci)
router.post("/", createMesqci)
router.delete("/:id", deleteMesqci)
router.put("/:id", updateMesqci)

export default router