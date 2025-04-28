function GameBoard (){
  const cell = 9; //number of ttt box
  const board = []; //contains the looped arrays
  //push Cell value to the game board
  for (let i = 0; i < cell; i++) {
    board.push(Cell());
  }
  const getBoard = () => board;

  // addToken
  // console.log(addToken) //undefined

  const dropToken = (index, player) => {
    const okayCells = board
      .filter ((board) => board.getValue() === 0)
      .map((board) => [index]) //this may be where the problem is
      console.log(board[index])
      board[index].addToken(player)
      console.log(okayCells)
  }

  const printBoard = () => {
    const boardCell = board.map((cell => cell.getValue()));
    console.log(boardCell)
  };
  return {getBoard, dropToken, printBoard};
}
GameBoard();

function Cell (){
  let value = 0;
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
    console.log(index)
    board.printBoard();
  }

  console.log(board)
  return {
    playRound,
    getActivePlayer
  };
};

const game = GameController();
game.playRound(7);