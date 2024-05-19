import { Router } from 'express'
import { createXeberler, deleteXeberler, getAllXeberler, getByIdXeberler, updateXeberler } from '../controllers/xeberler.js'
const router = Router()


router.get("/",getAllXeberler)
router.get("/:name", getByIdXeberler)
router.post("/", createXeberler)
router.delete("/:id", deleteXeberler)
router.put("/:id", updateXeberler)

export default router