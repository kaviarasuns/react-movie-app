import { useState } from "react"

export function TicTacToe(){

  return(
    <div>
      <h1>Fun Game</h1>
    <Board/>  
    </div>
  )
}

function Board(){
    const [board, setBoard] = useState([null,null,null,null,null,null,null,null,null]);

    const [isXTurn, setIsXTurn] = useState(true);

    // function to decide winner
    const decideWinner = (board) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],

        ];
    

    for(let i = 0; i < lines.length ; i++){
        const [a, b, c] = lines[i];
        if(board[a] != null & board[a]== board[b] & board[b]== board[c]){
            console.log("Winner", board[a]);
            return board[a]
        }
    }
}
    

const winner = decideWinner(board);


const handleClick = (index) => {
     if(winner == null & board[index]==null){   
        console.log(index);
        const boardCopy = [...board];
        boardCopy[index] = isXTurn ? "X" : "O";
        setBoard(boardCopy);
        // changing turn
        setIsXTurn(!isXTurn);
    }
    
}
    return(
        <div className="board">
        {board.map((val, index) => <GameBox val={val} onPlayerClick={()=> handleClick(index)}/>)}
        <h2>Winner is: {winner}</h2>
        <button onClick={() => setBoard([null,null,null,null,null,null,null,null,null])}>Restart</button>
        </div>
    )
}





function GameBox({val, onPlayerClick}){
    // const [val, setVal] = useState("");

    const styles ={
     color: val==="X" ? "green" : "red",
    }
    return(
        <div style={styles}className="game-box" 
        onClick={onPlayerClick}
        // onClick={() => setVal(val == "X" ? "O" : "X")}
        >{val}</div>
    )
} 