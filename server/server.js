const net = require('net');
const server = net.createServer();

server.on('connection', (socket) => {
   socket.on('data', (data) => {
      console.log('mensaje recibido del cliente:'+data.toString());
      socket.write('mensaje recibido ;)\n');
   })

   socket.on('close', () => {
      console.log('cliente desconectado');
   })
   socket.on('error', (err) => {
      console.log(err.message);
   })
});

server.listen(3000, () => {
   console.log('servidor escuchando en puerto', server.address().port);
});