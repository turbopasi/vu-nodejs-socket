const net    = require('net');
const server = net.createServer();

const port   = 64544;
const host   = '127.0.0.1';

server.on('connection', (socket) => {
  
  console.log("VEXT SERVER CONNECTED");

  socket.on('data', (data) => {

    // turn buffer into string and parse as JSON
    console.log(`${data}`);

  });

});

server.on('error', (err) => {
  console.log("ERROR", err.message)
});

server.listen({ host, port }, () => {
  console.log('OPENED TCP SOCKET SERVER ON', server.address());
});