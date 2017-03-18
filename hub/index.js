const web = require('express')();
const server = require('http').createServer(web);
const hub = require('socket.io')(server);

console.log('start');

hub.on('connection', (client) => {
  console.log('connected');

  client.emit('message', 'welcome');
});

web.get('/', (req, res) => {
  hub.emit('message', 'someone visited');
  res.send('watched');
});

server.listen(process.env.HUB_PORT);
