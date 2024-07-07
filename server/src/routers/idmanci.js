import { Router } from 'express'
import { createIdmanci, deleteIdmanci, getAllIdmanci, getByIdIdmanci, updateIdmanci } from '../controllers/idmanci.js'
const router = Router()


router.get("/",getAllIdmanci)
router.get("/:id", getByIdIdmanci)
router.post("/", createIdmanci)
router.delete("/:id", deleteIdmanci)
router.put("/:id", updateIdmanci)

export default router