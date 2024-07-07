import { Router } from 'express'
import { createIdmanNovleri, deleteIdmanNovleri, getIdmanNovleri, getByIdIdmanNovleri, updateIdmanNovleri } from '../controllers/idmanNovleri.js'
const router = Router()


router.get("/",getIdmanNovleri)
router.get("/:name", getByIdIdmanNovleri)
router.post("/", createIdmanNovleri)
router.delete("/:id", deleteIdmanNovleri)
router.put("/:id", updateIdmanNovleri)

export default router