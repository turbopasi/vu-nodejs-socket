const net    = require('net');
const server = net.createServer();

const port   = 64544;
const host   = '127.0.0.1';

server.on('connection', onConnection);

server.on('error', (err) => {
  console.log("ERROR", err.message);
});

server.on('close', () => {
  console.log("CLOSE");
});

server.listen({ host, port }, () => {
  console.log('OPENED TCP SOCKET SERVER ON', server.address());
});


/////////////////

function onConnection (vext) {

  console.log("VEXT SERVER CONNECTED");

  vext.on('data', (data) => {
    // turn buffer into string and log to console
    console.log('VEXT SOCKET DATA', `${data}`);
  });

  vext.on('close', () => {
    console.log('VEXT SOCKET CLOSE');
  });

  vext.on('drain', () => {
    console.log('VEXT SOCKET DRAIN');
  });

  vext.on('error', (err) => {
    console.log('VEXT SOCKET ERROR', err.message);
  });

}
