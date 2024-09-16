// Middleware global para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack); // Registrar el error en la consola
    res.status(500).json({
        status: 'error',
        message: 'Ocurrió un error en el servidor',
    });
});
