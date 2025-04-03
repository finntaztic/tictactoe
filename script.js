
const GameBoard = (() => {
  // my private variables 
  
  const box = 9;

  const makeGrid = () => {
    const body = document.querySelector ('body');
    const container = document.createElement('div');
    body.appendChild(container);
        //use for loop to create 9 boxes 
    for(let i=0; i < box; i++){
        const newDiv = document.createElement('div');
        container.appendChild(newDiv);
      } 
  }

  console.log(makeGrid)

  return {

    makeGrid

  }

})();






// const ShoppingCart = (() => {
//   // Private variables
//   const cartItems = [];

//   // Private methods
//   const addItem = (item) => {
//       cartItems.push(item);
//       console.log(`${item.name} added to cart`);
//   };

//   const removeItem = (index) => {
//       if (index >= 0 && index < cartItems.length) {
//           const removedItem = cartItems.splice(index, 1)[0];
//           console.log(`${removedItem.name} removed from cart`);
//       } else {
//           console.log('Invalid index');
//       }
//   };

//   const getTotalPrice = () => {
//       let totalPrice = 0;
//       cartItems.forEach(item => {
//           totalPrice += item.price;
//       });
//       return totalPrice.toFixed(2);
//   };

//   const displayCart = () => {
//       console.log('Items in the cart:');
//       cartItems.forEach(item => {
//           console.log(`${item.name} - $${item.price.toFixed(2)}`);
//       });
//       console.log(`Total Price: $${getTotalPrice()}`);
//   };

//   // Public API
//   return {
//       addItem,
//       removeItem,
//       displayCart
//   };
// })();
// var counterIncrementer = (function() {
//   var counter = 0;

//   return function() {
//     return ++counter;
//   };
// })();

// function gameBoard (){
//   const grid = {
//      box : 9,
//      return{
//       makeGrid: function() { 

//         const body = document.querySelector ('body');
//         const container = document.createElement('div');
//         body.appendChild(container);
//         //use for loop to create 9 boxes 
//         for(var i=0; i < box.length; i++){
//           const newDiv = document.createElement('div');
//           container.appendChild(newDiv);
//           // container.innerHTML += '<div class="box"></div>';
//         }
//       }
//     }
// }
// }
  //rendering the gameboard using for loop: search: create div using array and for loop javascript
  // const body = document.querySelector('body');

  // const container = document.createElement('div');
  // body.appendChild(container);

  // for(var i=0; i < 6; i++){
  //    var newDiv = document.createElement('div');
  //    container.appendChild(newDiv);
  // }
  


// let person2 = {
//   firstName: 'Jane',
//   lastName: 'Doe',
//   getFullName() {
//     return this.firstName + ' ' + this.lastName;
//   },
// };

// console.log(person2.getFullName());

//   //store the gameboard as an array inside of a Gameboard object


// function Player (player, marker){
//     this.player = player,
//     this.marker = marker
// //players are also going to be stored in objects
//     //object to control the flow of the game itself
// }


// //goal
// // 1. use little global variable. tuck as much as possible inside factories
// //2.  wrap in IIFE

// //3. 3 objects (game, gameboard, player)
// //factory


// //to-do 
// //1. store the gameboard in gameboard object ( use for loop)
// function factoryFunction() {
//   var obj = {
//      someProp1 : "1",
//      someProp2 : "2",
//      someMethod: function() { /* whatever */ }
//   };
//   // other code to manipulate obj in some way here
//   return obj;
// }

// function createPlayer(player, marker) {
//     return {
//         player: player,
//         marker: marker,
//         talk: function () {
//             console.log (+ player + 'uses' + marker + 'in the game');
//         }
//     };
// }
 
// //Create a robot with name Chitti
// const player1 = createPlayer('human');
// const marker1 = ''
 
// player1.talk();
 
 
// // Create a robot with name Chitti 2.O Upgraded
// const player2 = createPlayer('human upgraded');
 
// player2.talk();

// var myModule = {
//     name: 'Will',
//     age: 34,
//     sayName: function() {
//         alert(this.name);
//     },
//     setName: function (newName) {
//         this.name = newName;
//     }
// };
//     myModule.setName('Willis');
//     myModule.sayName ();




// //make a module that stores the player and marker
// //create new module that stores the player name and the marker
// //push it in the array
// //clg to confirm




// //creating 'new' using factory functions
// // Factory Function
// function createUser(name) {
//     return {
//       name,
//       username: "@" + name
//     };
//   }
//   const user2 = createUser("Bob");



//   //this is how to extend factory functions by combining objects.
//   function createUser(name) {
//     return {
//       name,
//       greet: () => console.log(`Hello, I'm ${name}`)
//     };
//   }

//   //module pattern 
  
//   const myModule = (function() {
//     let privateVar = "Secret";
//     return {
//       getSecret: () => privateVar
//     };
//   })();
  
//   console.log(myModule.getSecret()); // "Secret"
//   console.log(myModule.privateVar); // Undefined (it's private)


//   //adding prototype but in better way
//   function createPlayer(name, level) {
//     const user = createUser(name); // Reuse createUser
//     return {
//       ...user,  // Copy properties from user
//       level, // this one adds the prototype
//       play: () => console.log(`${name} is playing at level ${level}`)
//     };
//   }
  
//   const player = createPlayer("Darryl", 5);
//   player.greet();  // Hello, I'm Darryl
//   player.play();   // Darryl is playing at level 5

// //IIFE

// const Formatter = (function() {
//   // Private function (only accessible inside the module)
//   const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

//   // Public function (exposed outside the module)
//   return {
//     makeUppercase: (text) => {
//       log("Making uppercase");
//       return text.toUpperCase();
//     }
//   };
// })();

// console.log(Formatter.makeUppercase("hello"));  


// //constructor vs factory function


// //constructor

// function ConstructorFunction() {
//   this.someProp1 = "1";
//   this.someProp2 = "2";
// }
// ConstructorFunction.prototype.someMethod = function() { /* whatever */ };


// //factory

// function factoryFunction() {
//   var obj = {
//      someProp1 : "1",
//      someProp2 : "2",
//      someMethod: function() { /* whatever */ }
//   };
//   // other code to manipulate obj in some way here
//   return obj;
// }