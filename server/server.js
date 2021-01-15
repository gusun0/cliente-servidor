const net = require('net');

const server = net.createServer();

// recibe como parametro el evento connection
server.on('connection', (socket) => {
 socket.on('data',(data) => {
    console.log('Mensaje recibido desde el cliente: '+ data); 
    socket.write('recibido');
 });

  socket.on('close', () => {
   console.log('Comunicación finalizada'); 
  });

  socket.on('error', (err) => {
   console.log(err.message); 
  });
});

server.listen(3000, () => {
  console.log('El servidor esta escuchando en la puerta',server.address().port);
});
