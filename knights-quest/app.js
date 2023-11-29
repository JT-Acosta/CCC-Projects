document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.board');
    const rows = 8;
    const cols = 8;
    
// pieces
const blackPieces =[
    'img/black_rook.png',
    'img/black_knight.png',
    'img/black_bishop.png',
    'img/black_king.png',
    'img/black_queen.png',
    'img/black_bishop.png',
    'img/black_knight.png',
    'img/black_rook.png'
];
const whitePieces =[
    'img/white_rook.png',
    'img/white_knight.png',
    'img/white_bishop.png',
    'img/white_king.png',
    'img/white_queen.png',
    'img/white_bishop.png',
    'img/white_knight.png',
    'img/white_rook.png'
];



//create your board
//<div style="background-color: #8a4b38;"><img src="/img/black_rook.png" height="70" width="70"></div>
//<div style="background-color: #eeeed3;"><img src="/img/black_knight.png" height="70" width="70"></div>
//function chessBoard (row, cols) {
//cell.style.backgroundImage = "url('img/black_pawn.png')";
//cell.style.backgroundSize = 'cover';
    let chessBoard = document.getElementById('chessBoard');
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('div');
            if (i === 0) {
                cell.style.backgroundImage = `url(${blackPieces[j]})`;
                cell.style.backgroundSize = 'cover';   
            }
            if (i === 1) {
                cell.style.backgroundImage = "url('img/black_pawn.png')";
                cell.style.backgroundSize = 'cover';
            }
            if (i === 6) {
                cell.style.backgroundImage = "url('img/white_pawn.png')"
                cell.style.backgroundSize = 'cover';
            }
            if (i === 7) {
                cell.style.backgroundImage = `url(${whitePieces[j]})`;
                cell.style.backgroundSize = 'cover';
            }
            if (i % 2 === 0) {
                if (j % 2 === 0) {   
                    cell.style.backgroundColor ='#eeeed3';
                }   else {
                    cell.style.backgroundColor = '#8a4b38';
                }
                
                
            }   else {
                    if (j % 2 === 0) {   
                        cell.style.backgroundColor ='#8a4b38';
                    }   else {
                        cell.style.backgroundColor = '#eeeed3';
                    }
                   
                }
            
                
           
            chessBoard.appendChild(cell);  
        }

    }

})
