
import {blackKing, blackQueen, blackRook1, blackRook2, blackBishop1, 
    blackBishop2, blackKnight1, blackKnight2, blackPawn, whiteKing, 
    whiteQueen, whiteRook1, whiteRook2, whiteBishop1, whiteBishop2, 
    whiteKnight1, whiteKnight2, whitePawn } from './bindPieces.js';

import {displayMovesKing, displayMovesBishop, displayMovesKnight
    , displayMovesPawn, displayMovesQueen, displayMovesRook} from './displayPossibleMoves.js';


// chessMatrix is a map that stores the position of each piece on the board
let chessMatrix = new Map();

for(let i = 0 ; i < 8 ; i ++)
{
    for(let j = 0 ; j < 8 ; j ++)
    {
       chessMatrix.set(`row-${i}_column-${j}`, null);
    }
}

//initialPiecesPosition() function sets the initial position of all the pieces on the board
function initialPiecesPosition() {

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
}initialPiecesPosition() 



//add event listener to all the pieces
blackKing.addEventListener('click', function() {displayMoves(blackKing)})
blackQueen.addEventListener('click', function() {displayMoves(blackQueen)})
blackRook1.addEventListener('click', function() {displayMoves(blackRook1)})
blackRook2.addEventListener('click', function() {displayMoves(blackRook2)})
blackBishop1.addEventListener('click', function() {displayMoves(blackBishop1)})
blackBishop2.addEventListener('click', function() {displayMoves(blackBishop2)})
blackKnight1.addEventListener('click', function() {displayMoves(blackKnight1)})
blackKnight2.addEventListener('click', function() {displayMoves(blackKnight2)})
for(let i = 0 ; i < 8 ; i++) {
    blackPawn[i].addEventListener('click', function() {displayMoves(blackPawn[i])})
}

whiteKing.addEventListener('click', function() {displayMoves(whiteKing)})
whiteQueen.addEventListener('click', function() {displayMoves(whiteQueen)})
whiteRook1.addEventListener('click', function() {displayMoves(whiteRook1)})
whiteRook2.addEventListener('click', function() {displayMoves(whiteRook2)})
whiteBishop1.addEventListener('click', function() {displayMoves(whiteBishop1)})
whiteBishop2.addEventListener('click', function() {displayMoves(whiteBishop2)})
whiteKnight1.addEventListener('click', function() {displayMoves(whiteKnight1)})
whiteKnight2.addEventListener('click', function() {displayMoves(whiteKnight2)})
for(let i = 0 ; i < 8 ; i++) {
    whitePawn[i].addEventListener('click', function() {displayMoves(whitePawn[i])})
}


//displayBoard() function displays the board with all the pieces
function displayBoard()
{ 
    for(let index of chessMatrix)
    {
       let position = index[0]
       let piece = index[1]
        
       if(piece != null)
        {
            document.getElementById(position).appendChild(piece)
        }
    }

}


//displayMoves() function displays the possible moves of the piece
export function displayMoves(piece) {
    
    let position = piece.parentElement.id ;

    let r = position.split('_')[0];
    let row = r.split('-')[1];
    
    let c = position.split('_')[1];
    let column = c.split('-')[1];

    row = Number(row); column = Number(column);


   if(piece == blackKing || piece == whiteKing)
   {
         displayMovesKing(row , column, piece);
   }
   else if(piece == blackQueen || piece == whiteQueen)
   {
        displayMovesQueen(row , column);
   }
   else if(piece == blackRook1 || piece == blackRook2 || piece == whiteRook1 || piece == whiteRook2)
   {
        displayMovesRook(row , column);
   }
   else if(piece == blackBishop1 || piece == blackBishop2 || piece == whiteBishop1 || piece == whiteBishop2)
   {
        displayMovesBishop(row, column);
   }
   else if(piece == blackKnight1 || piece == blackKnight2 || piece == whiteKnight1 || piece == whiteKnight2)
   {
        displayMovesKnight(row , column);
   }
   else if(piece == blackPawn[0] || piece == blackPawn[1] || piece == blackPawn[2] || piece == blackPawn[3] 
        || piece == blackPawn[4] || piece == blackPawn[5] || piece == blackPawn[6] || piece == blackPawn[7] 
        || piece == whitePawn[0] || piece == whitePawn[1] || piece == whitePawn[2] || piece == whitePawn[3] 
        || piece == whitePawn[4] || piece == whitePawn[5] || piece == whitePawn[6] || piece == whitePawn[7])
    {
        displayMovesPawn(row , column);
    }
}



function display(row , column, piece){

    if(row != null && column != null && piece != null)
    {
        document.getElementById(`row-${row}_column-${column}`).appendChild(piece)

    }
    
    
}
displayBoard()
