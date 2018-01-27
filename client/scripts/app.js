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
app.send = function(message) {
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




// $.get('http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages',
// console.log)



// get ----  duh
// put ---- updating info
// post --- creating info
// delete --- duh
