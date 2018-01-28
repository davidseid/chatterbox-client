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


app.fetch = function fetch (callback) {

  return $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
    type: 'GET',
    data: {order: '-createdAt'},
    contentType: 'application/json',
    success: function (data) {
      var totalData = data.results;
      totalData.forEach((item)=>{
        callback(item);
      });
    
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

var usersArr = [];
app.renderMessage = function renderMessage (message) {
  // filters repeated users for user container
  // create a users array in global scope
  // if (message.user can't be found in the array){
  // add the user to the array and append the user to the DOM
  //elsee ---- nothing
  var escapedUser = _.escape(message.username);

  if (usersArr.indexOf(message.username) === -1) {
    var $onlineUser = $('<div class="userInMain"></div>');
    $('#onlineUsers').append($onlineUser);
    $onlineUser.text(escapedUser);
      
    usersArr.push(message.username);
  }
  

  // Creating Divs
  var $msgContainer = $('<div class="messageContainer"></div>');
  
  var $username = $('<div class="username"></div>');
  var $text = $('<div class="text"></div>');

  // Adding texts to created divs
  var escapedText = _.escape(message.text);

  $username.text(escapedUser);
  $text.text(escapedText);
  
  // Appending divs to DOM
  $('#chats').append($msgContainer);
  $('.messageContainer').append($username);
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
  $('.refresh').on('click',function() {
    app.clearMessages();
    app.fetch(app.renderMessage);
  });

  
  app.fetch(app.renderMessage);

});


