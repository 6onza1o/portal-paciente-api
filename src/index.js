import express, { json } from 'express';
import cors from 'cors';
import router from "./routes/index.routes.js";

const app = express();

// CORS para LOCAL y PRODUCCIÓN
app.use(cors({
  origin: [
    'http://localhost:4200',
    'https://portal-paciente-front-44c5.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));


app.use(json());

// Rutas
app.use('/api', router);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
