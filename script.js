function GameBoard (){
  const cell = 9;
  const board = []; 
  for (let i = 0; i < cell; i++){
    board.push(Cell());
    // board.forEach((box) => {
    //   box.addEventListener('click', () => {
    //     console.log ('box is clicked');
    //   })
    // })
  }

  // for(let j = 0; j < board.length; j++) {
  //   board[i].addEventListener("click", bindClick(i));
  // }

  // function bindClick(i) {
  // return function() {
  //     console.log("you clicked region number " + i);
  // };
  // }

  const getBoard = () => board;
  const dropToken = (index, player) => {
    if (board[index].getValue() === 0){
      board[index].addToken(player)
    } else return;
  }

  const checkWinner = () => {
    console.log(board[0].getValue())
    if ((board[0].getValue() === 1 && board[3].getValue() === 1 && board[6].getValue() === 1)
      || (board[1].getValue() === 1 && board[4].getValue() === 1 && board[7].getValue() === 1)
      || (board[2].getValue() === 1 && board[5].getValue() === 1 && board[8].getValue() === 1)
      || (board[0].getValue() === 1 && board[4].getValue() === 1 && board[8].getValue() === 1)
      || (board[2].getValue() === 1 && board[4].getValue() === 1 && board[6].getValue() === 1)){
      console.log("Player 1 wins this round 🎉")
    } else if ((board[0].getValue() === 2 && board[3].getValue() === 2 && board[6].getValue() === 2)
      || (board[1].getValue() === 2 && board[4].getValue() === 2 && board[7].getValue() === 2)
      || (board[2].getValue() === 2 && board[5].getValue() === 2 && board[8].getValue() === 2)
      || (board[0].getValue() === 2 && board[4].getValue() === 2 && board[8].getValue() === 2)
      || (board[2].getValue() === 2 && board[4].getValue() === 2 && board[6].getValue() === 2)){
      console.log("Player 2 wins this round 🎉🎉")
    } 
    else if (
      board[0].getValue() !== 0 && board[1].getValue() !== 0 && board[2].getValue() !== 0
      && board[3].getValue() !== 0 && board[4].getValue() !== 0 && board[5].getValue() !== 0
      && board[6].getValue() !== 0 && board[7].getValue() !== 0 && board[8].getValue() !== 0
    ){
      console.log("It's a tie")
    } else return;
  }

  const printBoard = () => {
    const boardCell = board.map((cell => cell.getValue()));
    console.log(boardCell)
  };
  
  const display = () => {
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.id = 'container';
    body.appendChild(container);

    getBoard().forEach(item => {
      const div = document.createElement('div');
      div.className = 'boxes';
      container.appendChild(div);

      if (item.getValue() == '1' || item.getValue() == '2'){
        let textNode = document.createTextNode(item.getValue())
        div.appendChild(textNode);
      } else return;


    })

  // getting the marker of the player
  // const playerMark = () => {
  //   let boxes = document.querySelectorAll('.boxes');
  //   console.log(boxes);

  //   boxes.forEach((box) => {
  //     box.addEventListener('click', () => {
  //       console.log ('box is clicked');
  //     })
  //   })
  // }
  // playerMark();
  }

  return {
    getBoard, 
    dropToken, 
    printBoard, 
    checkWinner, 
    display, 
    // playerMark
  };
}

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

  board.display(); //initial display
  
  const playRound = (index) => {
    console.log(`Marking ${getActivePlayer().name}'s token into index: ${index}`);
    board.dropToken(index, getActivePlayer().token);

    switchPlayerTurn();
    printNewRound();
    board.checkWinner();
    const container = document.getElementById('container');
    container.remove(); //removes initial display
    board.display(); // display the updated board
  };
    printNewRound();

  return {
    playRound,
    getActivePlayer
  };
};
const game = GameController();

game.playRound(0);
game.playRound(1);
game.playRound(2);
game.playRound(3);
game.playRound(4);
game.playRound(5);









