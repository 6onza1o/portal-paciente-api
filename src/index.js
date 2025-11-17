import express, { json } from 'express';
import cors from 'cors';   // ← agregar
const app = express();
import router from "./routes/index.routes.js";




// Habilitar CORS para Angular
app.use(cors({
    origin: 'http://localhost:4200',   // permitir Angular local
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(json());

// Rutas
app.use('/api', router);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
