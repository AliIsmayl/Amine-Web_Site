import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import cron from "node-cron";
import axios from "axios";

import idmanNovleri from "./src/routers/idmanNovleri.js";
import Rehberlik from "./src/routers/rehberlik.js";
import Mesqci from "./src/routers/mesqci.js";
import Idmanci from "./src/routers/idmanci.js";
import Hakim from "./src/routers/hakim.js";
import Komitet from "./src/routers/komitet.js";
import Xeberler from "./src/routers/xeberler.js";
import Foto from "./src/routers/foto.js";
import ContactRouter from "./src/routers/contact.js";
import Video from "./src/routers/video.js";
import MedalRouter from "./src/routers/medal.js";
import LoginRouter from "./src/routers/login.js";
import YarisTimeRouter from "./src/routers/yarisTime.js";
import Administrative from "./src/routers/administrative.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routers
app.use("/idmanNovleri", idmanNovleri);
app.use("/rehberlik", Rehberlik);
app.use("/mesqci", Mesqci);
app.use("/idmanci", Idmanci);
app.use("/hakim", Hakim);
app.use("/komitet", Komitet);
app.use("/xeberler", Xeberler);
app.use("/foto", Foto);
app.use("/video", Video);
app.use("/contact", ContactRouter);
app.use("/medal", MedalRouter);
app.use("/login", LoginRouter); // "/" deyil "/login" daha düzgündür
app.use("/yaris", YarisTimeRouter);
app.use("/administrative", Administrative);

// Sağlamlıq yoxlaması üçün sadə route (Vacibdir!)
app.get("/", (req, res) => {
  res.send("Backend işləyir! ✅");
});

// Mongo bağlantısı
const url = process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD);
const PORT = process.env.PORT || 5000;

mongoose
  .connect(url)
  .then(() => console.log("🟢 MongoDB bağlantısı uğurludur"))
  .catch((error) => console.error("🔴 MongoDB bağlantı xətası:", error));

// Serveri işə sal
app.listen(PORT, () => {
  console.log(`🚀 Server ${PORT} portunda işləyir`);
});

// Cron job — server yatmasın deyə özünü yoxlayır
cron.schedule("*/5 * * * *", async () => {
  try {
    const response = await axios.get("https://amina-azif.az/");
    console.log("🕒 Cron GET uğurlu:", response.status);
  } catch (error) {
    console.error("🚫 Cron error:", error.message);
  }
});
