const io = require( "socket.io" )();
const socketapi = {
    io: io
};

io.on('setMenu', function(socket){

    socket.on('newMenu', function(data) {
      console.log('New Menu has been set:', data);

      io.emit('newMenu', {
        userFirstName: data.userFirstName,
        message: data.message
      });
    });

    socket.on('setMenu', function(data) {
      console.log('newMenu:', data.userFirstName);
      io.emit('setMenu', {
          userFirstName:data.userFirstName,
          numClients: io.engine.clientsCount,
          message: 'View Menu'
      });
    });

});

module.exports = socketapi;
