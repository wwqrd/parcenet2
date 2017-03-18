var hub = require('socket.io').listen(process.env.HUB_PORT);

console.log('Init server');
console.log(`${process.env.HUB_PORT}`);

hub.sockets.on('connection', (socket) => {
    console.log('Server-Client Connected!');
    socket.on('message', (data) => {
    });
});
