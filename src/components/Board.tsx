import Square from "./Square"
import { useState } from "react"

const Board = () => {
  const [state, setState] = useState({ squares: Array(9).fill(null), xIsNext: true })

  const handleClick = (i: number) => {
    const squares = state.squares.slice()
    squares[i] = state.xIsNext ? "X" : "O"
    setState({ ...state, squares, xIsNext: !state.xIsNext })
  }

  const renderSquare = (i: number) => (
    <Square
      value={state.squares[i]}
      onClick={() => {
        handleClick(i)
      }}
    />
  )

  return (
    <div>
      <div className="status">Next player: {state.xIsNext ? "X" : "O"}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board
