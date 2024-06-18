import { Router } from 'express'
import { createYarisTime, deleteYarisTime, getAllYarisTime, getByIdYarisTime, updateYarisTime } from '../controllers/yarisTime.js'
const router = Router()


router.get("/",getAllYarisTime)
router.get("/:id", getByIdYarisTime)
router.post("/", createYarisTime)
router.delete("/:id", deleteYarisTime)
router.put("/:id", updateYarisTime)

export default router