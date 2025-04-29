function GameBoard (){
  const cell = 9;
  const board = []; 
  for (let i = 0; i < cell; i++){
    board.push(Cell());
  }
  const getBoard = () => board;


  const dropToken = (index, player) => {
    const okayCells = board
      .filter ((cell) => cell.getValue() === 0)
    const notOkayCells = !okayCells;

      if (notOkayCells){
        return;
      } else board[index].addToken(player)
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

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players [0] ? players [1] : players [0]
  };

  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn.`)
  };

  const playRound = (index) => {
    console.log(`Marking ${getActivePlayer().name}'s token into index: ${index}`);
    board.dropToken(index, getActivePlayer().token);

    switchPlayerTurn();
    printNewRound();
  };
    printNewRound();

  return {
    playRound,
    getActivePlayer
  };
};

const game = GameController();
game.playRound(7);
game.playRound(8);
game.playRound(1);
game.playRound(0);
game.playRound(0);

