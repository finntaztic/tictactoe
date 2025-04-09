//creates the ttt cells

function GameBoard (){
    const cell = 9;
    const arr = [];

    for (let i = 0; i < cell; i++) {
      arr.push(i);
    }

    const getBoard = () => arr;
    console.log(arr)
    return {getBoard} 
}

function createPlayer(
  playerOneName = "Player One",
  playerTwoName = "Player Two"
) {

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

  console.log(players)
  return {
    players
  }
}
createPlayer()





// function createPlayer (name, mark, arr = []){
//   makeGrid();
//   console.log(arr = [])

//   return {
//     name,
//     mark,
//     arr,
//     makeMark: function (){
//       console.log (mark);
//     }
//   }
// };

// createPlayer();

//goal is to leave mark to the div??? 
// function createPlayer (name, mark, arr = []){

//   //creates the player, assign a mark,  leave a mark to the div
//   return {
//     name: name,
//     mark: mark,
//     index (){
//       arr.addEventListener("click", myFunction);
//     }
//     }
//   }


// const createPlayer = (name, gameArr = []) => { // 👈 pass gameArr as paramater so the function can work with.
//   let properties = {
//       name,
//       copyArr(){
//         let newArr = gameArr;
//         console.log(newArr)
//       }
//   }

//   return properties; // 👈 return properties. not player.
// }

// const game = (() => {
//   const gameArr = [1,2,3,4,5]

//   let player = createPlayer("Fred", gameArr)

//   let testObj = {
//     name: "Bob",
//     copyArr(){
//       let newArr = gameArr;
//       console.log(newArr);
//     }
//   }

//   testObj.copyArr();
//   player.copyArr();

//   return 
// })()







// function createPlayer (name, mark){
//   return {
//     name,
//     mark,
//     // makeMark: function (){
//     //   console.log (mark);
//     // }
//   }
// };



// const human = createPlayer('human', 'X')
// console.log(human.mark)

//this function to make the player leave a mark





// function elementFactory(type, text, color) {
//   const el = document.createElement(type)
//   el.innerText = text
//   el.style.color = color
//   document.body.append(el)

//   return {
//     el,
//     setText(newText) {
//       el.innerText = newText
//     },
//     setColor(newColor) {
//       el.style.color = newColor
//     }
//   }
// }

// const h1 = elementFactory('h1', 'I am H1', 'blue')
// const a = elementFactory('a', 'I am A', 'red')
// const p = elementFactory('p', 'I am P', 'green')

// h1.setText('Changed H1!')
// a.setColor('purple')

// function createUser (name) {
//   const discordName = "@" + name;

//   let reputation = 0;
//   const getReputation = () => reputation;
//   const giveReputation = () => reputation++;

//   return { name, discordName, getReputation, giveReputation };
// }

// const josh = createUser("josh");
// josh.giveReputation();
// josh.giveReputation();

// console.log({
//   discordName: josh.discordName,
//   reputation: josh.getReputation()
// });

