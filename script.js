//Simplifying the TTT 
function GameBoard (){
  const cell = 9; //number of ttt box
  const board = []; //contains the looped arrays

  //push Cell value to the gameboard

  //use divs to push to array so we can replace value of the cell

  
  for (let i = 0; i < cell; i++) {
    board [i] = [];
    board[i].push(Cell().initialValue);
  }
  console.log(board)

  const getBoard = () => board;

  // const printBoard = () => {
  //   const text = 'hello';
  //   console.log(text)
  // }
  // printBoard();

  
  const dropToken = () => {
    const board = getBoard();
    console.log(board)
    
    const index = addToken().index;
    const token = addToken().player;
    console.log(index)
    console.log(board[index])
    let test1 = 0
    let test2 = 0


    if ((board[index]) == 0){
      board[index] = token
      console.log(board)
    } else return;
  }

  dropToken();


  return {getBoard, dropToken}
}
GameBoard();

//push cell to the gameboard

function Cell (){
  initialValue = 0;
  player = 1

  return {
    initialValue,
    addToken
  }
}

function addToken (){

  index = 3;
  token = [2];

  return {
    index,
    token
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