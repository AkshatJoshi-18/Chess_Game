
// Black pieces

const blackKing = document.createElement('img');
blackKing.src = '../resources/pieces_image/black-king.png';

const blackQueen = document.createElement('img');
blackQueen.src = '../resources/pieces_image/black-queen.png';


const blackRook1 = document.createElement('img');
blackRook1.src = '../resources/pieces_image/black-rook.png';

const blackRook2 = document.createElement('img');
blackRook2.src = '../resources/pieces_image/black-rook.png';

const blackBishop1 = document.createElement('img');
blackBishop1.src = '../resources/pieces_image/black-bishop.png';


const blackBishop2 = document.createElement('img');
blackBishop2.src = '../resources/pieces_image/black-bishop.png';

const blackKnight1 = document.createElement('img');
blackKnight1.src = '../resources/pieces_image/black-knight.png';


const blackKnight2 = document.createElement('img');
blackKnight2.src = '../resources/pieces_image/black-knight.png';


const blackPawn = new Array(8);
for(let i = 0 ; i < 8 ; i++) {
    blackPawn[i] = document.createElement('img');
    blackPawn[i].src = '../resources/pieces_image/black-pawn.png';
}


// White pieces

const whiteKing = document.createElement('img');
whiteKing.src = '../resources/pieces_image/white-king.png';


const whiteQueen = document.createElement('img');
whiteQueen.src = '../resources/pieces_image/white-queen.png';


const whiteRook1 = document.createElement('img');
whiteRook1.src = '../resources/pieces_image/white-rook.png';


const whiteRook2 = document.createElement('img');
whiteRook2.src = '../resources/pieces_image/white-rook.png';


const whiteBishop1 = document.createElement('img');
whiteBishop1.src = '../resources/pieces_image/white-bishop.png';


const whiteBishop2 = document.createElement('img');
whiteBishop2.src = '../resources/pieces_image/white-bishop.png';


const whiteKnight1 = document.createElement('img');
whiteKnight1.src = '../resources/pieces_image/white-knight.png';


const whiteKnight2 = document.createElement('img');
whiteKnight2.src = '../resources/pieces_image/white-knight.png';


const whitePawn = new Array(8);
for(let i = 0 ; i < 8 ; i++) {
    whitePawn[i] = document.createElement('img');
    whitePawn[i].src = '../resources/pieces_image/white-pawn.png';
}


export { blackKing, blackQueen, blackRook1, blackRook2, blackBishop1, 
    blackBishop2, blackKnight1, blackKnight2, blackPawn, whiteKing, 
    whiteQueen, whiteRook1, whiteRook2, whiteBishop1, whiteBishop2, 
    whiteKnight1, whiteKnight2, whitePawn ,};
