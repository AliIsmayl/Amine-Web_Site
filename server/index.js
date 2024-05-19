import express from 'express'
import cors from 'cors'
import "dotenv/config"
import mongoose from 'mongoose'
import idmanNovleri from './src/routers/idmanNovleri.js'
import Rehberlik from './src/routers/rehberlik.js'
import Mesqci from './src/routers/mesqci.js'
import Idmanci from './src/routers/idmanci.js'
import Hakim from './src/routers/hakim.js'
import Komitet from './src/routers/komitet.js'
import Xeberler from './src/routers/xeberler.js'
import Foto from './src/routers/foto.js'
import Video from './src/routers/video.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use("/idmanNovleri",idmanNovleri)
app.use("/rehberlik",Rehberlik)
app.use("/mesqci",Mesqci)
app.use("/idmanci",Idmanci)
app.use("/hakim",Hakim)
app.use("/komitet",Komitet)
app.use("/xeberler",Xeberler)
app.use("/foto",Foto)
app.use("/video",Video)



const url=process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)
const PORT=process.env.PORT

mongoose.connect(url).then(()=>console.log("connected")).catch((error)=>console.log({message:error}))
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})