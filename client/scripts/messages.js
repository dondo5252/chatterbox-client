// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.
//
var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],//object

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  create: function (messages, callback) {
    Messages._data.push(messages);
    //Messages.data[message.objectid] = message
  },
  update: function(messages, callback) {
    //for (const message of messages) {
    // Messages.add(message)
    //}
    //callback(Object.values(Messages._data))
  }
};
//console.log('Messages data', Messages._data);
//function that take msg param and adds that msg to data structure
//create msg
//add to data structure
//take in param(mssg)
//add ,sg to data structure


//send all of messages
//cerate a msg
//add msg to data structure
