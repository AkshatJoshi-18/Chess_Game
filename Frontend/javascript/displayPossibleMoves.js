
export function displayMovesKing(row , column, piece){
    let r = row;
    let c = column;
    let p = piece;
    let possibleIndex = new Array();

    for(let i = row - 1 ; i <= row +1 ; i++)
    {
        for(let j = column - 1 ; j <= column + 1 ; j++)
        {
            if((i != row || j != column) && (i >= 0 && i <= 7 && j>= 0 && i <= 7 ) )
            {
                document.getElementById(`row-${i}_column-${j}`).setAttribute('style', 'background-color: green');
                possibleIndex.push([i,j])
            }  
        }
    }

    for(let index of possibleIndex)
    {
        let row = Number(index[0])
        let column = Number(index[1])
        document.getElementById(`row-${row}_column-${column}`).addEventListener('click', function() {


            
            chessMatrix.set(`row-${r}_column-${c}`, null)
            chessMatrix.set(`row-${row}_column-${column}`, piece)
            console.log(chessMatrix)
            display(row , column, piece)

            for(let i = row - 1 ; i <= row +1 ; i++)
                {
                    for(let j = column - 1 ; j <= column + 1 ; j++)
                    {
                        document.getElementById(`row-${i}_column-${j}`).removeAttribute('style')

                    }
                }
            
        });
    }

    console.log(possibleIndex)
    

}





export function displayMovesQueen(row , column){


    console.log(row, column)

}


export function displayMovesRook(row, column){

    console.log(row, column)

}


export function displayMovesBishop(row, column){

    console.log(row, column)

}


export function displayMovesKnight(row , column){

    console.log(row , column)

}


export function displayMovesPawn(row , column){

    console.log(row , column)

}

