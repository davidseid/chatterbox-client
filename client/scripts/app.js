//http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages where CAMPUS


// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };
//

var app = {
};

app.server = 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages'; 
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

app.fetch = function fetch (message) {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
    type: 'GET',
    contentType: 'application/json',
    success: function (data) {
      console.log(data);
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

var message = {
  username: 'Mel Brooks',
  text: 'Never underestimate the power of the Schwartz!',
  roomname: 'lobby'
};

app.renderMessage = function renderMessage (message) {

  // Creating Divs
  var $msgContainer = $('<div class="messageContainer"></div>');
  var $username = $('<div class="username"></div>');
  var $onlineUser = $('<div class="userInMain"></div>');
  var $text = $('<div class="text"></div>');

  // Adding texts to created divs
  $username.text(message.username);
  $text.text(message.text);
  $onlineUser.text(message.username);
  
  // Appending divs to DOM
  $('#chats').append($msgContainer);
  $('.messageContainer').append($username);
  $('#onlineUsers').append($onlineUser);
  $('.messageContainer').append($text);
};

app.renderRoom = function renderRoom (roomName) {
  var $room = $('<div class="room"></div>');
  $room.text(roomName);
  $('#roomSelect').append($room);
};

app.handleUsernameClick = function () {
  console.log('this user was clicked');
};

$(document).ready(function () {
  $('#onlineUsers').on('click', '.userInMain', function(event) {
    app.handleUsernameClick();
  });
});




// $.get('http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages',
// console.log)



// get ----  duh
// put ---- updating info
// post --- creating info
// delete --- duh
