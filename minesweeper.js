document.addEventListener('DOMContentLoaded',startGame);

// Define your `board` object here!


//initialise an object globally;



var board = {};

var cells = [];
//add property to the object;
//set property object = Array;
//add elements to Array (col, rows, isMine, isMarked, hidden)

function createBoard(size){



 for(var i= 0; i < size; i++){

  for(var j = 0; j < size; j++){

  var randomNumer = Math.floor(Math.random() * 11);
  
    var cell = {
      row:i,
      col: j,
      isMine: randomNumer < 3,
      hidden: true,
      isMarked:false
    }
  
    cells.push(cell);
    
  }

}

return cells

}



function startGame(){
 
  board.cells = createBoard(6);
  assignSurrounding()
  lib.initBoard()
  

 
}


function reset(){
  window.location.reload();
}
    
//This var is holding each element of the array 
//'i' represents each element of the array 
//cell.surrounding is adding "surrounding" as property.
//then I'm assigning the value of countSurroundingMines which is a function to the new property



function assignSurrounding(){

for(var i = 0; i < board.cells.length; i++){ 
    
      var cell = board.cells[i];

      cell.surroundingMines = countSurroundingMines(cell);
  }

//Don't remove this function call: it makes the game work!
 

}

document.onclick = checkForWin;
window.oncontextmenu = checkForWin;
document.getElementById('button').addEventListener('click', startGame)


// Define this function to look for a win condition:

// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin (){

//if all mines are not marked haven't win yet

  var winner= true;
  
  for(var i = 0; i < board.cells.length; i++){

   var count = board.cells[i];

  if(count.isMine && !count.isMarked)
    return winner = false;
  
}

 if(winner){
   
  lib.displayMessage('You win!')

}
}
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
// var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines (cell){
  
  var count = 0;
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)

  
for(var i = 0; i < surrounding.length; i++){
     
    var cell = surrounding[i];
  
    if(cell.isMine){
    
      count++

}

}
return count;
}
