document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
 var board = {

  cells:[ 
   
    { row:0,  
      col:1,
      isMine:false,
      hidden:true,
      
    },  
      
    {
      row:1,
      col:1,
      isMine:false,
      hidden:true,
    }, 
    
    {
      row:2, 
      col:1,
      isMine:false, 
      hidden:true,    
    },
    
    {
      row:2, 
      col:2,
      isMine:false,
      hidden:true,
    }
  ]

  }
  

function startGame () {
 
for(var i = 0; i < board.cells.length; i++){
    
    //This var is holding each element of the array 
    //'i' represents each element of the array 
var cell = board.cells[i];

cell.surroundingMines = countSurroundingMines(cell);
  }
//cell.surrounding is adding "surrounding" as property.
//then I'm assigning the value of countSurroundingMines which is a function to the new property

cell.surroundingMines = countSurroundingMines(cell);
  
  //Don't remove this function call: it makes the game work!
 lib.initBoard()
}

// Define this function to look for a win condition:
function winCondition(value){

}


// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin (){


    //return lib.displayMessage('You win!')

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  }


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
// var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines (cell) {

var getSurroundingCells = lib.getSurroundingCells(cell.row, cell.col);
var count = 0;
  
for(var i = 0; i < getSurroundingCells.length; i++){
     
    var cell = getSurroundingCells[i];    
 
    if( cell.isMine){
    
      count++

  }

  }
  return count;
}

