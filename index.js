const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const os = require('os');

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

io.on('connection', socket => console.log('a user connected'));

setInterval(() => {
  io.emit('memory usage', os.totalmem() - os.freemem());
}, 200);

http.listen(3000, () => console.log('listening on *:3000'));
