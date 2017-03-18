const web = require('express')();
const server = require('http').createServer(web);
const hub = require('socket.io')(server);

console.log('start');

hub.on('connection', (client) => {
  console.log('connected');
});

web.get('/action/:action', (req, res) => {
  const action = Object.assign({
    action: req.params.action
  }, { arguments: req.query });

  console.log('action', action);

  hub.emit('action', action);

  res.send('ok');

});

server.listen(process.env.HUB_PORT);
