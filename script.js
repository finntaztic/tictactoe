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

  const checkWinner = () => {
    if ((board[0].getValue() === 'X' && board[3].getValue() === 'X' && board[6].getValue() === 'X')
      || (board[1].getValue() === 'X' && board[4].getValue() === 'X' && board[7].getValue() === 'X')
      || (board[2].getValue() === 'X' && board[5].getValue() === 'X' && board[8].getValue() === 'X')
      || (board[0].getValue() === 'X' && board[4].getValue() === 'X' && board[8].getValue() === 'X')
      || (board[2].getValue() === 'X' && board[4].getValue() === 'X' && board[6].getValue() === 'X')){
      console.log("Player 1 wins this round 🎉")
    } else if ((board[0].getValue() === 2 && board[3].getValue() === 'O' && board[6].getValue() === 'O')
      || (board[1].getValue() === 'O' && board[4].getValue() === 'O' && board[7].getValue() === 'O')
      || (board[2].getValue() === 'O' && board[5].getValue() === 'O' && board[8].getValue() === 'O')
      || (board[0].getValue() === 'O' && board[4].getValue() === 'O' && board[8].getValue() === 'O')
      || (board[2].getValue() === 'O' && board[4].getValue() === 'O' && board[6].getValue() === 'O')){
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
    checkWinner,
    display,
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

function playerMaker (){
    
    const dialog = document.getElementById('dialog1')
    const firstPlayerInput = document.getElementById('first_player');
    const secondPlayerInput = document.getElementById('second_player');
    const startButton = document.querySelector('button');

    dialog.showModal()
    let firstPlayerName;
    startButton.addEventListener('click', (e) => {
      e.preventDefault();
      firstPlayerName = firstPlayerInput.value;
      secondPlayerName = secondPlayerInput.value;
      GameController(firstPlayerName, secondPlayerName)
      dialog.close()
    })
  }
playerMaker()


function GameController (
  playerOneName = 'Player 1',
  playerTwoName = 'Player 2'
){
  const board = GameBoard();

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
    board.checkWinner();
    const container = document.getElementById('container');
    container.remove(); //removes initial display
    board.display(); // display the updated board
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
    printNewRound,
  };
};

// GameController()


//pick up assignment
//1. the board display in the game controller displays the table content
//2. so the dialog start button should promote the board display



//backlog
//1. gameOver , shouldnt allow to add turn to the box when theres winner -- idk  its ok
//2. shouldnt be able to click on the occupied box so player's turn doesnt get counted
//3. reset button
//4. allow players to add their name
//5. start game button
