const io = require( "socket.io" )();
const socketapi = {
    io: io
};


io.on('connection', function (socket) {
  console.log("socket connected")
  socket.on('announcement', function (data) {
    console.log("New Menu Uploaded")
    console.log(data);
    io.emit('announcement', {
      data: data
    });
  });

  socket.on('connectionEvent', function (data) {
    console.log('connection:', data.userFirstName);
    io.emit('connectionEvent', {
      userFirstName: data.userFirstName,
      message: 'Menu Added'
    });
  });

});

module.exports = socketapi;
