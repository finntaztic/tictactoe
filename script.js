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

  const dropToken = () => {
    const board = getBoard();
    console.log(board)
    
    const index = addToken().index;
    const token = addToken().token;

    if ((board[index]) == 0){
      board[index] = token;
      console.log(board)
    } else return;
  }
  dropToken();

  return {getBoard, dropToken};
}
GameBoard();

//push initial value of the array to the gameboard

function Cell (){
  value = 0;
  player = 1

  return {
    value
  }
}

//add players token to the array

function addToken (){
  index = 3;
  token = 2;

  return {
    index,
    token
  }
}
