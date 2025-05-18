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

  const announceWinner  = (playerName) => {
    const dialog2 = document.getElementById('dialog2');
    const annMent = document.createElement('h1');
    annMent.textContent = `${playerName} wins!`;
    dialog2.appendChild(annMent);

    const btn = document.createElement('button');
    btn.innerHTML = 'Start/ Restart';
    btn.id = "startBtn";
    dialog2.appendChild(btn);

    // Add event listener to reload the page
    btn.addEventListener('click', () => {
      location.reload();
    });

    dialog2.showModal();
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

    board.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = `boxes-${index + 1}`;
      container.appendChild(div);

      if (item.getValue() == 'X' || item.getValue() == 'O') {
        let textNode = document.createTextNode(item.getValue());
        div.appendChild(textNode);
      } else return;
    });
  };

  return {
    getBoard,
    dropToken,
    printBoard,
    display,
    announceWinner // Make sure to return announceWinner
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

(function playerMaker () {
  const dialog = document.getElementById('dialog1');
  const firstPlayerInput = document.getElementById('first_player');
  const secondPlayerInput = document.getElementById('second_player');
  const startButton = document.querySelector('button');

  dialog.showModal();

  let firstPlayerName;
  let secondPlayerName;

  startButton.addEventListener('click', (e) => {
    e.preventDefault();
    firstPlayerName = firstPlayerInput.value;
    secondPlayerName = secondPlayerInput.value;
    GameController(firstPlayerName, secondPlayerName);
    dialog.close();
  });
})();



function GameController (
  playerOneName = 'Player 1',
  playerTwoName = 'Player 2'
){
  const board = GameBoard(); // Get an instance of GameBoard which now has announceWinner

    const players = [
    {
      name: playerOneName,
      token: 'X'
    },
    {
      name: playerTwoName,
      token: 'O'
    }
  ];

  const checkWinner = () => {
    const currentBoard = board.getBoard(); // Get the actual game board
    if ((currentBoard[0].getValue() === 'X' && currentBoard[3].getValue() === 'X' && currentBoard[6].getValue() === 'X')
      || (currentBoard[1].getValue() === 'X' && currentBoard[4].getValue() === 'X' && currentBoard[7].getValue() === 'X')
      || (currentBoard[2].getValue() === 'X' && currentBoard[5].getValue() === 'X' && currentBoard[8].getValue() === 'X')
      || (currentBoard[0].getValue() === 'X' && currentBoard[4].getValue() === 'X' && currentBoard[8].getValue() === 'X')
      || (currentBoard[2].getValue() === 'X' && currentBoard[4].getValue() === 'X' && currentBoard[6].getValue() === 'X')){
      console.log(`${playerOneName} wins this round 🎉`)
      board.announceWinner(playerOneName) // Call announceWinner on the board instance
    } else if ((currentBoard[0].getValue() === 'O' && currentBoard[3].getValue() === 'O' && currentBoard[6].getValue() === 'O')
      || (currentBoard[1].getValue() === 'O' && currentBoard[4].getValue() === 'O' && currentBoard[7].getValue() === 'O')
      || (currentBoard[2].getValue() === 'O' && currentBoard[5].getValue() === 'O' && currentBoard[8].getValue() === 'O')
      || (currentBoard[0].getValue() === 'O' && currentBoard[4].getValue() === 'O' && currentBoard[8].getValue() === 'O')
      || (currentBoard[2].getValue() === 'O' && currentBoard[4].getValue() === 'O' && currentBoard[6].getValue() === 'O')){
      console.log(`${playerTwoName} wins this round 🎉🎉`)
      board.announceWinner(playerTwoName) // Call announceWinner on the board instance
    }
    else if (
      currentBoard[0].getValue() !== 0 && currentBoard[1].getValue() !== 0 && currentBoard[2].getValue() !== 0
      && currentBoard[3].getValue() !== 0 && currentBoard[4].getValue() !== 0 && currentBoard[5].getValue() !== 0
      && currentBoard[6].getValue() !== 0 && currentBoard[7].getValue() !== 0 && currentBoard[8].getValue() !== 0
    ){
      console.log("It's a tie")
      board.announceWinner('No one') // Call announceWinner on the board instance for a tie
    } else {
      // Game continues
    }
  }

  let activePlayer = players [0];
  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players [0] ? players [1] : players [0]
  };

  const getActivePlayer = () => activePlayer;
  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn.`)
  };


  board.display()
// Call it elsewhere in your code if needed:
  const playRound = (index) => {
    console.log(`Marking ${getActivePlayer().name}'s token into index: ${index}`);
    board.dropToken(index, getActivePlayer().token);

    switchPlayerTurn();
    printNewRound();
    checkWinner(); // Call checkWinner after a move is made
    const container = document.getElementById('container');
    if (container) {
      container.remove(); //removes initial display
      board.display(); // display the updated board
    }
    getIndex()
  };
    getIndex()
    printNewRound();

  function getIndex (){
      let boxes = document.querySelectorAll ('div[class^="boxes-"]');

        boxes.forEach((box) => {
          box.addEventListener('click', () => {
            console.log('box is clicked')
            let index;

            if (box.className == 'boxes-1'){
              index = '0';
              playRound(index);
            } else if (box.className == 'boxes-2'){
              index = '1';
              console.log (index)
              console.log ('box is clicked');
              playRound(index)
            } else if (box.className == 'boxes-3'){
              index = '2';
              console.log (index)
              console.log ('box is clicked');
              playRound(index)
            } else if (box.className == 'boxes-4'){
              index = '3';
              console.log (index)
              console.log ('box is clicked');
              playRound(index)
            } else if (box.className == 'boxes-5'){
              index = '4';
              console.log (index)
              console.log ('box is clicked');
              playRound(index)
            } else if (box.className == 'boxes-6'){
              index = '5';
              console.log (index)
              console.log ('box is clicked');
              playRound(index)
            } else if (box.className == 'boxes-7'){
              index = '6';
              console.log (index)
              console.log ('box is clicked');
              playRound(index)
            } else if (box.className == 'boxes-8'){
              index = '7';
              console.log (index)
              console.log ('box is clicked');
              playRound(index)
            } else if (box.className == 'boxes-9'){
              index = '8';
              console.log (index)
              console.log ('box is clicked');
              playRound(index)
            }
          })
          })
    }


  return {
    playRound,
    getActivePlayer,
    printNewRound
    };
};