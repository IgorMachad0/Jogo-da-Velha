import React from "react";
import { useState } from "react";
import { calculateWinner } from "./components/WinnerCalc";

function Square({id, value, onSquareClick}) {

  return <button className="square" id={id} onClick={onSquareClick}>
    {value}
  </button>;
}

export default function Board() {

  const[squares, setSquares] = useState(Array(36).fill(null));
  const[xIsNext, setXIsNext] = useState(true);
  const[winner, setWinner] = useState(null);

  function handleClick(i) {
    if(squares[i] || winner) {
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext) {
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setWinner(calculateWinner(i , nextSquares));
    setXIsNext(!xIsNext);
  }
  
  let status;
  if (winner) {
    status = `Winner:   ${squares[winner[1]]}`;
    winner.forEach(id => {
      let win = document.getElementById(id);
      win.classList.add('win');
    })
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
  <>   
    <div className="board">
    <div className="board-row">
    <Square id={0} value={squares[0]} onSquareClick={ () => handleClick(0)}/>
    <Square id={1} value={squares[1]} onSquareClick={ () => handleClick(1)}/>
    <Square id={2} value={squares[2]} onSquareClick={ () => handleClick(2)}/>
    <Square id={3} value={squares[3]} onSquareClick={ () => handleClick(3)}/>
    <Square id={4} value={squares[4]} onSquareClick={ () => handleClick(4)}/>
    <Square id={5} value={squares[5]} onSquareClick={ () => handleClick(5)}/>    
    </div>    
    <div className="board-row">
    <Square id={6} value={squares[6]} onSquareClick={ () => handleClick(6)}/>
    <Square id={7} value={squares[7]} onSquareClick={ () => handleClick(7)}/>
    <Square id={8} value={squares[8]} onSquareClick={ () => handleClick(8)}/>  
    <Square id={9} value={squares[9]} onSquareClick={ () => handleClick(9)}/>
    <Square id={10} value={squares[10]} onSquareClick={ () => handleClick(10)}/>
    <Square id={11} value={squares[11]} onSquareClick={ () => handleClick(11)}/>  
    </div>    
    <div className="board-row">
    <Square id={12} value={squares[12]} onSquareClick={ () => handleClick(12)}/>
    <Square id={13} value={squares[13]} onSquareClick={ () => handleClick(13)}/>
    <Square id={14} value={squares[14]} onSquareClick={ () => handleClick(14)}/>
    <Square id={15} value={squares[15]} onSquareClick={ () => handleClick(15)}/>
    <Square id={16} value={squares[16]} onSquareClick={ () => handleClick(16)}/>
    <Square id={17} value={squares[17]} onSquareClick={ () => handleClick(17)}/>    
    </div>
    <div className="board-row">
    <Square id={18} value={squares[18]} onSquareClick={ () => handleClick(18)}/>
    <Square id={19} value={squares[19]} onSquareClick={ () => handleClick(19)}/>
    <Square id={20} value={squares[20]} onSquareClick={ () => handleClick(20)}/>
    <Square id={21} value={squares[21]} onSquareClick={ () => handleClick(21)}/>
    <Square id={22} value={squares[22]} onSquareClick={ () => handleClick(22)}/>
    <Square id={23} value={squares[23]} onSquareClick={ () => handleClick(23)}/>    
    </div>    
    <div className="board-row">
    <Square id={24} value={squares[24]} onSquareClick={ () => handleClick(24)}/>
    <Square id={25} value={squares[25]} onSquareClick={ () => handleClick(25)}/>
    <Square id={26} value={squares[26]} onSquareClick={ () => handleClick(26)}/>  
    <Square id={27} value={squares[27]} onSquareClick={ () => handleClick(27)}/>
    <Square id={28} value={squares[28]} onSquareClick={ () => handleClick(28)}/>
    <Square id={29} value={squares[29]} onSquareClick={ () => handleClick(29)}/>  
    </div>    
    <div className="board-row">
    <Square id={30} value={squares[30]} onSquareClick={ () => handleClick(30)}/>
    <Square id={31} value={squares[31]} onSquareClick={ () => handleClick(31)}/>
    <Square id={32} value={squares[32]} onSquareClick={ () => handleClick(32)}/>
    <Square id={33} value={squares[33]} onSquareClick={ () => handleClick(33)}/>
    <Square id={34} value={squares[34]} onSquareClick={ () => handleClick(34)}/>
    <Square id={35} value={squares[35]} onSquareClick={ () => handleClick(35)}/>    
    </div>
    </div>
    
    <pre className="status">{status}</pre>
  </>
  );
}
