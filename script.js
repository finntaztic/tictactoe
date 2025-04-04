

const GameBoard = (() => {
  // my private variables 
  const box = 9;
  const arr = [];

  //push things to the array


  //make the array items show in the html 
  function makeGrid (){
    const body = document.querySelector ('body');
    const container = document.createElement('div');
    body.appendChild(container);
        //use for loop to create 9 boxes 
    for(let i=0; i < box; i++){
        const newDiv = document.createElement('div');
        arr.push (i);
        container.appendChild(newDiv);
      } 
      console.log(arr)
  };
  return [
    arr,
    //console.log(arr),
    makeGrid ()
  ]
})();



