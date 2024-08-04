 // Black pieces


const blackKing = document.createElement('img');
blackKing.src = '../resources/pieces_image/black-king.png';
blackKing.id = "blackKing"
blackKing.className = "black"

const blackQueen = document.createElement('img');
blackQueen.src = '../resources/pieces_image/black-queen.png';
blackQueen.id = "blackQueen"
blackQueen.className = "black"

const blackRook1 = document.createElement('img');
blackRook1.src = '../resources/pieces_image/black-rook.png';
blackRook1.id = "blackRook1"
blackRook1.className = "black"

const blackRook2 = document.createElement('img');
blackRook2.src = '../resources/pieces_image/black-rook.png';
blackRook2.id = "blackRook2"
blackRook2.className = "black"

const blackBishop1 = document.createElement('img');
blackBishop1.src = '../resources/pieces_image/black-bishop.png';
blackBishop1.id = "blackBishop1"
blackBishop1.className = "black"

const blackBishop2 = document.createElement('img');
blackBishop2.src = '../resources/pieces_image/black-bishop.png';
blackBishop2.id = "blackBishop2"
blackBishop2.className = "black"

const blackKnight1 = document.createElement('img');
blackKnight1.src = '../resources/pieces_image/black-knight.png';
blackKnight1.id = "blackKnight1"
blackKnight1.className = "black"

const blackKnight2 = document.createElement('img');
blackKnight2.src = '../resources/pieces_image/black-knight.png';
blackKnight2.id = "blackKnight2"
blackKnight2.className = "black"

const blackPawn = new Array(8);
for(let i = 0 ; i < 8 ; i++) {
    blackPawn[i] = document.createElement('img');
    blackPawn[i].src = '../resources/pieces_image/black-pawn.png';
    blackPawn[i].id = `blackPawn${i}`
    blackPawn[i].className = "black"
}


// White pieces

const whiteKing = document.createElement('img');
whiteKing.src = '../resources/pieces_image/white-king.png';
whiteKing.id = "whiteKing"
whiteKing.className = "white"

const whiteQueen = document.createElement('img');
whiteQueen.src = '../resources/pieces_image/white-queen.png';
whiteQueen.id = "whiteQueen"
whiteQueen.className = "white"

const whiteRook1 = document.createElement('img');
whiteRook1.src = '../resources/pieces_image/white-rook.png';
whiteRook1.id = "whiteRook1"
whiteRook1.className = "white"

const whiteRook2 = document.createElement('img');
whiteRook2.src = '../resources/pieces_image/white-rook.png';
whiteRook2.id = "whiteRook2"
whiteRook2.className = "white"

const whiteBishop1 = document.createElement('img');
whiteBishop1.src = '../resources/pieces_image/white-bishop.png';
whiteBishop1.id = "whiteBishop1"
whiteBishop1.className = "white"

const whiteBishop2 = document.createElement('img');
whiteBishop2.src = '../resources/pieces_image/white-bishop.png';
whiteBishop2.id = "whiteBishop2"
whiteBishop2.className = "white"

const whiteKnight1 = document.createElement('img');
whiteKnight1.src = '../resources/pieces_image/white-knight.png';
whiteKnight1.id = "whiteKnight1"
whiteKnight1.className = "white"

const whiteKnight2 = document.createElement('img');
whiteKnight2.src = '../resources/pieces_image/white-knight.png';
whiteKnight2.id = "whiteKnight2"
whiteKnight2.className = "white"

const whitePawn = new Array(8);
for(let i = 0 ; i < 8 ; i++) {
    whitePawn[i] = document.createElement('img');
    whitePawn[i].src = '../resources/pieces_image/white-pawn.png';
    whitePawn[i].id = `whitePawn${i}`
    whitePawn[i].className = "white"
}


// export { blackKing, blackQueen, blackRook1, blackRook2, blackBishop1, 
//     blackBishop2, blackKnight1, blackKnight2, blackPawn, whiteKing, 
//     whiteQueen, whiteRook1, whiteRook2, whiteBishop1, whiteBishop2, 
//     whiteKnight1, whiteKnight2, whitePawn ,};

let currentChance = "white"

let chessMatrix = new Map(); // chesess matrix is my initial looking of the board

for(let i = 0 ; i < 8 ; i ++)
{
    for(let j = 0 ; j < 8 ; j ++)
    {
       chessMatrix.set(`row-${i}_column-${j}`, null);
    }
}

const pieceDetails = {
  name : null,
  currentPogition : null,
  nextPosition : null,
}

function setPieceToMatrix () {
  for(let i = 0 ; i < 8 ; i++) {
      chessMatrix.set(`row-6_column-${i}`, blackPawn[i]);
  }

  chessMatrix.set('row-7_column-0', blackRook1);
  chessMatrix.set('row-7_column-1', blackKnight1);
  chessMatrix.set('row-7_column-2', blackBishop1);
  chessMatrix.set('row-7_column-3', blackQueen);
  chessMatrix.set('row-7_column-4', blackKing);
  chessMatrix.set('row-7_column-5', blackBishop2);
  chessMatrix.set('row-7_column-6', blackKnight2);
  chessMatrix.set('row-7_column-7', blackRook2);


  for(let i = 0 ; i < 8 ; i++) {
      chessMatrix.set(`row-1_column-${i}`, whitePawn[i]);
  }

  chessMatrix.set('row-0_column-0', whiteRook1);
  chessMatrix.set('row-0_column-1', whiteKnight1);
  chessMatrix.set('row-0_column-2', whiteBishop1);
  chessMatrix.set('row-0_column-3', whiteQueen);
  chessMatrix.set('row-0_column-4', whiteKing);
  chessMatrix.set('row-0_column-5', whiteBishop2);
  chessMatrix.set('row-0_column-6', whiteKnight2);
  chessMatrix.set('row-0_column-7', whiteRook2);
}setPieceToMatrix() 


// in piece map the index for a piece is store
const pieceMap = new Map()
for( let i of chessMatrix)
{
  if(i[1] != null)
    {
      pieceMap.set(i[1], i[0])
    }
}

console.log(pieceMap)
// console.log(chessMatrix)

// Display the board
function displayBoard()
{ 
  let pieceChance = document.getElementById("playerChance")
  pieceChance.innerText = `${currentChance} to move`
  console.log(pieceChance)
    for(let index of pieceMap)
    {
       let position = index[1]
       let piece = index[0]
      document.getElementById(position).appendChild(piece)
    }
    

}displayBoard();


//when a piece is dropped
for (let i of chessMatrix) {
  const element = document.getElementById(i[0])
  element.addEventListener('dragover', (event) => {event.preventDefault()})
 
  element.addEventListener('drop', (event) => { 
    event.preventDefault()
    pieceDetails.nextPosition = i[0]
    movePiece()
  });  
  
  // when a piece is draged
  if (i[1] != null)
    {
      const piece = i[1]
      const pogition  = i[0]
      piece.ondragstart = function () 
          {
            pieceDetails.name = piece
            pieceDetails.currentPogition = pogition
          }
    }
 
}


function movePiece() 
{ 

  const piece = pieceDetails.name
  const currentPosition = pieceDetails.currentPogition
  const nextPosition = pieceDetails.nextPosition

  if (piece.className == currentChance) 
    { 
      pieceMap.set(piece, nextPosition) 
      if (currentChance == "white") 
        {
          currentChance = "black"
        }
      else 
        {
          currentChance = "white"
        }
    }
  
  displayBoard()
}

