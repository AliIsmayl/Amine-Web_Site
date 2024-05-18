import express from 'express'
import cors from 'cors'
import "dotenv/config"
import mongoose from 'mongoose'
import idmanNovleri from './src/routers/idmanNovleri.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use("/idmanNovleri",idmanNovleri)



const url=process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)
const PORT=process.env.PORT

mongoose.connect(url).then(()=>console.log("connected")).catch((error)=>console.log({message:error}))
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})