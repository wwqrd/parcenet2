const client = require('socket.io-client')(`http://${process.env.HUB_HOST}:${process.env.HUB_PORT}`);

console.log('start');

client.on('connect', () => {

  console.log('connected', `http://${process.env.HUB_HOST}:${process.env.HUB_PORT}`);

  client.on('message', (data) => {
    console.log('received', data);
  });
});
