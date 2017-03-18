const client = require('socket.io-client')(`http://${process.env.HUB_HOST}:${process.env.HUB_PORT}`);

console.log('start');

client.on('connect', () => {

  console.log('connected');

  client.on('action', (data) => {
    console.log('action', data);
  });
});
