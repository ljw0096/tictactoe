import Square from "./Square"
import { useState } from "react"

const Board = () => {
  const [state, setState] = useState({ squares: Array(9).fill(null) })
  const status = "Next player: X"
  const handleClick = (i: number) => {
    const squares = state.squares.slice()
    squares[i] = "X"
    setState({ ...state, squares })
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
      <div className="status">{status}</div>
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
