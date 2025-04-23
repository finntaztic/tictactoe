//Simplifying the TTT 
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
    const availableCells = board
      .filter((cell) => cell.getValue() === 0)
      .map((cell) => cell);

      if (!availableCells.length) return;

      board[index].addToken(player);
  }
  dropToken();

  const printBoard = () => {
    const boardWithCellValues = board.map((cell => cell.getValue())
    );
    
    console.log(boardWithCellValues)
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


//pick up on

//1. changing the value of the game board
//2. i think the cell() value part is screwing it cos i already tried
//manipualting values in the addtoken and its working, just that the get value is
//undefined


