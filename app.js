const express = require('express');
const app = express();
const port = 3000;
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
  console.log('a connection is made.');
  socket.on('chat message', (msg) => {
    // TODO:
  });
});

http.listen(port, () => console.log(`simple chat service listening on port ${port}!`));