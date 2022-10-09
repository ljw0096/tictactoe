import Board from "./Board"
import { useState } from "react"
import { calculateWinner } from "../utils/calculateWinner"

const Game = () => {
  const [state, setState] = useState({
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
    xIsNext: true,
  })
  const current = state.history[state.history.length - 1]
  const winner = calculateWinner(current.squares)
  let status = winner ? `Winner: ${winner}` : `Next Player: ${state.xIsNext ? "X" : "O"}`

  const handleClick = (i: number) => {
    const history = state.history
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) return
    squares[i] = state.xIsNext ? "X" : "O"
    setState({ ...state, history: history.concat([{ squares: squares }]), xIsNext: !state.xIsNext })
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* todo */}</ol>
      </div>
    </div>
  )
}

export default Game
