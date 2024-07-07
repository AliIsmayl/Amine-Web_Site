import { Router } from 'express'
import { createRehberlik, deleteRehberlik, getAllRehberlik, getByIdRehberlik, updateRehberlik } from '../controllers/rehberlik.js'
const router = Router()


router.get("/",getAllRehberlik)
router.get("/:id", getByIdRehberlik)
router.post("/", createRehberlik)
router.delete("/:id", deleteRehberlik)
router.put("/:id", updateRehberlik)

export default router