// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.
//
var App = {

  $spinner: $('.spinner img'), //loading symbol

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);//fetch all msgs from server
    setInterval(App.fetch, 3000);//grabs data in interval
    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {

      console.log(data); /////
      for (let i = 0; i < data.length; i++) {
        Messages.create(data[i]);
        if (data[i].roomname !== null) {
          Rooms.updateList(data[i].roomname);
        }
      }
      callback() //necessary?
    //store data in message.retrieve(Message.data)
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
