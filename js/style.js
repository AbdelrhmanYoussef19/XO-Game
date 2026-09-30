var board=["","","","","","","","",""];
var player="X";
var gameover=false;
var winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
function renderBoard(){
for(var i=0;i<9;i++){
 document.getElementById("cell"+i).textContent=board[i];
}
}

function checkWinner(){
for(var i=0;i<winPatterns.length;i++){
var pattern=winPatterns[i];
var a=pattern[0];
var b=pattern[1];
var c=pattern[2];

if(board[a]!==""&&board[a]===board[b]&&board[a]===board[c]){
    return true;
}

}
return false;
}

function cellClick(index){
if(gameover||board[index]!=="") return;

    board[index]=player;
    renderBoard()
    if(checkWinner()){
        document.getElementById("status").textContent="اللاعب "+player+" فاز!"
        gameover=true;
        return;
    }
if(!board.includes("")){
        document.getElementById("status").textContent="اللعبة انتهت بالتعادل!";
        gameover=true;
        return;
    }
    
        player=player==="X"?"O":"X";
        document.getElementById("status").textContent="اللاعب: "+player;
}

function resetGame(){
 board=["","","","","","","","",""];
 player="X";
 gameover=false;
 document.getElementById("status").textContent="اللاعب: "+player;
 renderBoard();
}



renderBoard();
