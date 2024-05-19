import { Router } from 'express'
import { createKomitet, deleteKomitet, getAllKomitet, getByIdKomitet, updateKomitet } from '../controllers/komitet.js'
const router = Router()


router.get("/",getAllKomitet)
router.get("/:id", getByIdKomitet)
router.post("/", createKomitet)
router.delete("/:id", deleteKomitet)
router.put("/:id", updateKomitet)

export default router