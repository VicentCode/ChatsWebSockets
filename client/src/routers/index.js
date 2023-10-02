const express = require('express');
const router = express.Router();

const net = require('net');
const servidor = {
    port: 3000,
    host: 'localhost'
}
const client = net.createConnection(servidor);

client.on('connect', () => {
    console.log('Conexión satisfactoria');
})

let mensaje = ''; 

client.on('data', (data) => {
    mensaje = data.toString('utf-8');
    console.log('Mensaje del servidor: ' + mensaje);
});

router.get('/', async (req, res) => {
    res.render('index.ejs', { mensaje }); 
});

router.post('/send', async (req, res) => {
    const datos = req.body;
    if (datos && typeof datos.mensaje === 'string') {
        console.log("Mensaje de: " + datos.mensaje);
        client.write(datos.mensaje);
    } else {
        console.error("Error: 'mensaje' no es una cadena válida");
    }
    res.redirect('/');
});

module.exports = router;
