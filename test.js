const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

var value1 = 1

app.get('/', (req, res) => {
    console.log(req.url)


    if (req.url == "/?storm"){
      res.send(value1.toString())
      console.log("asked")
    }
    else{
      res.sendFile(__dirname + '/controls.html');
    }
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

io.on('connection', (socket) => {
    socket.on('value1', (value) => {
      value1 = value;
    });
  });


server.listen(3000, () => {
  console.log('listening on *:3000');
});