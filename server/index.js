import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import cron from 'node-cron';
import axios from 'axios'; // Axios'u ekleyin
import idmanNovleri from './src/routers/idmanNovleri.js';
import Rehberlik from './src/routers/rehberlik.js';
import Mesqci from './src/routers/mesqci.js';
import Idmanci from './src/routers/idmanci.js';
import Hakim from './src/routers/hakim.js';
import Komitet from './src/routers/komitet.js';
import Xeberler from './src/routers/xeberler.js';
import Foto from './src/routers/foto.js';
import ContactRouter from './src/routers/contact.js';
import Video from './src/routers/video.js';
import MedalRouter from './src/routers/medal.js';
import LoginRouter from './src/routers/login.js';
import YarisTimeRouter from './src/routers/yarisTime.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/idmanNovleri', idmanNovleri);
app.use('/rehberlik', Rehberlik);
app.use('/mesqci', Mesqci);
app.use('/idmanci', Idmanci);
app.use('/hakim', Hakim);
app.use('/komitet', Komitet);
app.use('/xeberler', Xeberler);
app.use('/foto', Foto);
app.use('/video', Video);
app.use('/contact', ContactRouter);
app.use('/medal', MedalRouter);
app.use('/', LoginRouter);
app.use('/yaris', YarisTimeRouter);

const url = process.env.CONNECTION_URL.replace('<password>', process.env.PASSWORD);
const PORT = process.env.PORT;

mongoose.connect(url).then(() => console.log('connected')).catch((error) => console.log({ message: error }));
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// 10 dakikada bir request atmak için cron job oluşturun
cron.schedule('*/5 * * * *', async () => {
  try {
    const response = await axios.get('https://amina-azif.az/');
    console.log('Request successful:', response.status);
  } catch (error) {
    console.error('Error in cron job:', error.message);
  }
});
