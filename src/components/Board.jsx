import React,{useState} from 'react'
import Square from './Square'

const Board = () =>{
    const[state,setState]=useState(Array(9).fill(null));
    const[isXTurn,setXTurn]=useState(true);
    const handleClick=(index)=>{
        const copyState=[...state];
        if(copyState[index]){
        alert("This box is already filled.Please choose another box to fill.");
        }
        else{
        copyState[index]= isXTurn ? "X" : "O";
        setXTurn(!isXTurn);
        setState(copyState);
        }
        checkWinner();
    }
    const checkWinner = () =>{
        const WinnerState = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for (let logic of WinnerState){
            const [a,b,c]=logic;
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
                return state[a];
            }
        }
        return false;
    }
    let isWinner = checkWinner();
    const playAgain=()=>{
        setState(Array(9).fill(null));    
    }
    return(
        <div className='board' style={{textAlign:"center",marginTop:"60px"}}>
            <h2>TIC-TAC-TOE</h2>
            { isWinner ? 
                <div>
                <strong>{isWinner} won the game. </strong>
                <button style={{marginLeft:"10px",padding:"10px 20px",border:"none",color:"white",backgroundColor:"#00968894",borderRadius:"5px"}} onClick={()=>playAgain()}>Play Again</button>
                </div>
            :
                <>
                <div className='board-row'>
                    <Square onClick={()=>handleClick(0)} value={state[0]}/>
                    <Square onClick={()=>handleClick(1)} value={state[1]} />
                    <Square onClick={()=>handleClick(2)} value={state[2]}/>
                </div>
                <div className='board-row'>
                    <Square onClick={()=>handleClick(3)} value={state[3]}/>
                    <Square onClick={()=>handleClick(4)} value={state[4]}/>
                    <Square onClick={()=>handleClick(5)} value={state[5]}/>
                </div>
                <div className='board-row'>
                    <Square onClick={()=>handleClick(6)} value={state[6]}/>
                    <Square onClick={()=>handleClick(7)} value={state[7]}/>
                    <Square onClick={()=>handleClick(8)} value={state[8]}/>
                </div>
            </>
        }
        </div>
    )
}
export default Board