function GameBoard (){
  const cell = 9;
  const board = []; 
  for (let i = 0; i < cell; i++){
    board.push(Cell());
  }
  const getBoard = () => board;
  const dropToken = (index, player) => {
    if (board[index].getValue() === 0){
      board[index].addToken(player)
    } else return;
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
    getValue
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

  const checkWinner = () => {
    if (board[0] == 1 && board[3] == 1){
      console.log('Hooray')
    } else {
      console.log('no hooray')
    }
  }
  const playRound = (index) => {

    console.log(`Marking ${getActivePlayer().name}'s token into index: ${index}`);
    board.dropToken(index, getActivePlayer().token);

    //checking who wins
    // if (players[0].index == 0){
    //   console.log("check")
    // } else return;

    // console.log(board[0].getValue())
    // if (board[0].getValue() === 1 && board[3].getValue() === 1 && board[6].getValue() === 1){
    //   console.log("Player 1 wins the round")
    // } else return;
    console.log(board[0])

    switchPlayerTurn();
    printNewRound();
    checkWinner();
  };
    printNewRound();
  return {
    playRound,
    getActivePlayer
  };
};

const game = GameController();
game.playRound(0);
game.playRound(0);
game.playRound(3);
// game.playRound(0);
// game.playRound(6);
// game.playRound(0);




