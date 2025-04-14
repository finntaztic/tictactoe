//Simplifying the TTT 
function GameBoard (){
  const cell = 9; //number of ttt box
  const board = []; //contains the looped arrays

  //push Cell value to the gameboard
  for (let i = 0; i < cell; i++) {
    board.push(Cell().value);
  }
  console.log(board)

  const getBoard = () => board;

  const printBoard = () => {
    const text = 'hello';
    console.log(text)
  }
  printBoard();

  
  const dropToken = () => {
    const board = getBoard();
    const availableCell = board.filter((board) => board === 0);
    console.log(availableCell)
  }
  dropToken();


  return {getBoard, printBoard}
}
GameBoard();

//push cell to the gameboard

function Cell (){
  value = 0;
  player = 1


  const addToken = (player) => {
    value = player;
    console.log(value) //the clg doesnt log??? why
  };


  return {
    value,
    addToken
  }
}


//creates the ttt cells



// let player = 1;

// function Cell (){
//   let value = 0; //sets initial value of the cell to 0

//   const addToken = (player) => {
//     value = player;
//   }
//   const getValue = () => value;

//   return {
//     addToken, 
//     getValue
//   }
// }
// Cell ()

//make function that will pseudo occupy a cell?





// function players(){
//   //this one creates players who will play the game
// }



// function playRound (){
//   //this function accepts the player's mark and the cell in which it wants to mark
//   //calls function cell afterwards
// }


// function createPlayer(
//   playerOneName = "Player One",
//   playerTwoName = "Player Two"
// ) {

//   const players = [
//     {
//       name: playerOneName,
//       token: 1
//     },
//     {
//       name: playerTwoName,
//       token: 2
//     }

//   return [players]
// };