function GameBoard (){
  const cell = 9; //number of ttt box
  const board = []; //contains the looped arrays

  //push Cell value to the game board
  for (let i = 0; i < cell; i++) {
    board.push(Cell());
  }
  console.log(board)

  const getBoard = () => board;

  const dropToken = (index, player) => {

    const availableCells = board.map((cell => cell.getValue()));
    
    // const availableCells = board
    //   .filter((cell) => cell.getValue() === 0)

    const okayCell = availableCells;
    console.log(okayCell[1])

    //get the individual index of the okayCell to add the token

    board[1].addToken(player);
  }
  dropToken();

  const printBoard = () => {
    const boardCell = board.map((cell => cell.getValue()));
    
    console.log(boardCell)
  };

  printBoard();
  return {getBoard, dropToken};
}
GameBoard();

//pushes value to the gameboard
function Cell (){
  value = 0;

  const addToken = (player) => {
    value = player;
  };

  const getValue = () => value;
  return {
    addToken, 
    getValue,
  };
  }

Cell();

function GameController (
  playerOneName = 'Player 1',
  playerTwoName = 'Player 2'
){

  const board = GameBoard();
  //make players 

  const players = [
    {
      name: playerOneName,
      token: 1
    },
    {
      name: playerTwoName,
      token: 2
    }
  ];

  let activePlayer = players [0];
  console.log(activePlayer)

  const getActivePlayer = () => activePlayer;

  //goal is to change the value of one index in the gameboard
  const playRound = (index) => {
    console.log(`Marking ${getActivePlayer().name}'s token into index: ${index}`);
    board.dropToken(index, getActivePlayer().token);
  }
  console.log(board)
  return {
    playRound
  };
};

const game = GameController();

game.playRound(7);


function firstFunction() {
  // do something
  return "testing 123";
}

var test = firstFunction();  // this will grab you the return value from firstFunction();
alert(test);

function testCase() {
  var test = firstFunction(); 
  alert(test);
}
