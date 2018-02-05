
var message = {
  username: 'david',
  text: 'hello world',
  roomname: 'sfm8'
};

$('button').on('click', function() {
  $('.input').append('<p>HI</p>');
});



// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
//   type: 'POST',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message sent');
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message', data);
//   }
// });// YOUR CODE HERE:

// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
//   type: 'GET',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message sent');
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message', data);
//   }
// });// YOUR CODE HERE: