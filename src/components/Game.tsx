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
    stepNumber: 0,
    xIsNext: true,
  })
  const current = state.history[state.history.length - 1]
  const winner = calculateWinner(current.squares)
  let status = winner ? `Winner: ${winner}` : `Next Player: ${state.xIsNext ? "X" : "O"}`

  const handleClick = (i: number) => {
    const history = state.history.slice(0, state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) return
    squares[i] = state.xIsNext ? "X" : "O"
    setState({
      ...state,
      history: history.concat([{ squares: squares }]),
      stepNumber: history.length,
      xIsNext: !state.xIsNext,
    })
  }

  const jumpTo = (step: number) => {
    setState({
      ...state,
      stepNumber: step,
      xIsNext: step % 2 === 0,
    })
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={state.history[state.stepNumber].squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>
          {state.history.map((step, move) => {
            const desc = move ? `Go to move #${move}` : `Go to game start`
            return (
              <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default Game
