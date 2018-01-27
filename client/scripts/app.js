//http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages where CAMPUS


// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };
//
var app = {
};

app.init = function() {

};
app.send = function send (message) {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
    type: 'POST',
    data: message,
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

app.fetch = function fetch () {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: undefined,
    type: 'GET',
    data: 'messages',
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

app.clearMessages = function clearMessages () {
  $('#chats').empty();
};

app.renderMessage = function renderMessage (message) {
  var $msg = $('<div class="message"></div>');
  $msg.text(message);
  $('#chats').append($msg);
};

app.renderRoom = function renderRoom (roomName) {
  var $room = $('<div class="room"></div>');
  $room.text(roomName);
  $('#roomSelect').append($room);
};



// $.get('http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages',
// console.log)



// get ----  duh
// put ---- updating info
// post --- creating info
// delete --- duh
