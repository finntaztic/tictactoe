function GameBoard (){
  const cell = 9; //number of ttt box
  const board = []; //contains the looped arrays

  //push Cell value to the game board
  for (let i = 0; i < cell; i++) {
    board.push(Cell());
  }
  const getBoard = () => board;

  const dropToken = (index, player) => {
    const availableCells = board
      .filter((cell) => cell.getValue() === 0) 
    availableCells[index].addToken(player);
  }

  const printBoard = () => {
    const boardCell = board.map((cell => cell.getValue()));
    console.log(boardCell)
  };
  return {getBoard, dropToken, printBoard};
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

  const playRound = (index) => {
    console.log(`Marking ${getActivePlayer().name}'s token into index: ${index}`);
    board.dropToken(index, getActivePlayer().token);
    board.printBoard();
  }
  console.log(board)
  return {
    playRound
  };
};

const game = GameController();
game.playRound(7);

