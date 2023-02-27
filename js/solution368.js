// Escape the room
// You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).


// Add rooms here
var rooms = {
    name: {
      firstName : 'Elko',
      secondName : "Bieda",
      thirdName : 'xD'
    },
     description : {
       1: 1,
       2: 2,
       3: 3
     },
     completed : {
       isCompleted : false,
       toCompleted : true,
       whatIsThisKata: false
     }
   }

console.log(rooms)