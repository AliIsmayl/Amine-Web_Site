import { Router } from 'express'
import { createFoto, deleteFoto, getByIdFoto, getFoto, updateFoto } from '../controllers/foto.js'
const router = Router()


router.get("/",getFoto)
router.get("/:id",getByIdFoto )
router.post("/", createFoto)
router.delete("/:id", deleteFoto)
router.put("/:id", updateFoto)

export default router