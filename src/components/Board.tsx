import Square from "./Square"
import { useState } from "react"
import { calculateWinner } from "../utils/calculateWinner"

const Board = () => {
  const [state, setState] = useState({ squares: Array(9).fill(null), xIsNext: true })
  const winner = calculateWinner(state.squares)
  let status = winner ? `Winner: ${winner}` : `Next Player: ${state.xIsNext ? "X" : "O"}`

  const handleClick = (i: number) => {
    const squares = state.squares.slice()
    if (calculateWinner(squares) || squares[i]) return
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
