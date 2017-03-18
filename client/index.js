var client = require('socket.io-client')(`http://${process.env.HUB_HOST}:${process.env.HUB_PORT}`);

console.log('Init client server');
console.log(`${process.env.HUB_HOST}:${process.env.HUB_PORT}`);

client.on('connect', () => {
  client.on('message', (data) => {
    console.log(data)
  });
});
