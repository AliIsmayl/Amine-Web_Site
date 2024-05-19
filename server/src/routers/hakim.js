import { Router } from 'express'
import { createHakim, deleteHakim, getAllHakim, getByIdHakim, updateHakim } from '../controllers/hakim.js'
const router = Router()


router.get("/",getAllHakim)
router.get("/:id", getByIdHakim)
router.post("/", createHakim)
router.delete("/:id", deleteHakim)
router.put("/:id", updateHakim)

export default router