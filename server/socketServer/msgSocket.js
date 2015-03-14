/**
 * Created by youngmoon on 3/15/15.
 */

'use strict';

module.exports = function (io) {
  io.sockets.on('connection', function (socket) {
    console.error('===================== CONNECTED ====================');
    socket.on('init', function (user) {
      console.error('userId', user);
      var userId = user.id;
      socket.on('sendNoti', function (target) {
        console.error('========== target ========');
        console.error(target.id);
        socket.broadcast.emit('notiTo' + target.id, 'got noti');
      });

      
    });
  });
}
