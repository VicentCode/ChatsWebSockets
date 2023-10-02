const net = require('net');
const server = net.createServer();

let mensajes = [];

server.on('connection', (socket) => {
    socket.on('data', (data) => {
        const mensaje = data.toString('utf-8');
        console.log('mensaje recibido del cliente: ' + mensaje);
        mensajes.push(mensaje);

       socket.write(mensajes.join('\n') + '\n');

    });

    socket.on('close', () => {
        console.log('cliente desconectado');
    });

    socket.on('error', (err) => {
        console.log(err.message);
    });
});

server.listen(3000, () => {
    console.log('servidor escuchando en puerto', server.address().port);
});
