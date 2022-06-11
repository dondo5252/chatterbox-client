// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.//click event
  },

  render: function() {
    // TODO: Render _all_ the messages.//retrieve
    //Messages._data is our local array
    //iterate through data
    //call messasgeview.render(for each object)

  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    //create element
    $message = MessageView.render(message);
    MessagesView.$chats.prepend($message);
    //append element to messages messagesView.#chats.appendTo()
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};
//console.log('chats', MessagesView.$chats)