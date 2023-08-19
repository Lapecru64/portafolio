const express = require('express');
const path = require('path');

const app = express();

// Servir los archivos estáticos de la carpeta 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Redirigir todas las solicitudes a index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Iniciar el servidor en el puerto 8080 (o el puerto que prefieras)
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
