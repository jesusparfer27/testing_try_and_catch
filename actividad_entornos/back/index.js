import express from 'express'
import cors from 'cors'
import { HOST, PORT } from './config/config.js'
import apiRoutes from './routes/index.routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    try {
        res.setHeader("Content-Type", "text/html");
        const landingHTML = `
            <h1>Bienvenidos a nuestra REST-API</h1>
            <p>Servidor iniciado en ${HOST}:${PORT}</p>
        `;
        res.status(200).send(landingHTML);
    } catch (error) {
        console.error('Error en el endpoint de inicio:', error);
        res.status(500).send('Hubo un error en el servidor.');
    }
});

app.use("/API/v1/", apiRoutes)

app.use((req, res, next) => {
    const error = new Error('Ruta no encontrada');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    console.error('Error en el servidor:', error);
    res.status(error.status || 500).json({
        message: error.message || 'Ocurrió un error en el servidor',
        status: error.status || 500
    });
});

app.listen(PORT, () => {
    console.log(`Iniciando API en ${HOST}:${PORT}`)
})