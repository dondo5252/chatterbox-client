// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  updateList: function(rooms) {
    //loop through Messages._data
    //for each object rooms._data.push(Messag)
    Rooms._data.push(rooms);
    //console.log('ROOMSdataaaaaaaa', Rooms._data)

  }
};
console.log('ROOMSdataaaaaaaa', Rooms._data);

