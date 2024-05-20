import { Router } from 'express'
import { createVideo, deleteVideo, getByIdVideo, getVideo, updateVideo } from '../controllers/video.js'
const router = Router()


router.get("/",getVideo)
router.get("/:id",getByIdVideo )
router.post("/", createVideo)
router.delete("/:id", deleteVideo)
router.put("/:id", updateVideo)

export default router