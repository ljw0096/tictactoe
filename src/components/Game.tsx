import Board from "./Board"
import { useState } from "react"
import { calculateWinner } from "../utils/calculateWinner"
import GameHistory from "./GameHistory"
import GameStatus from "./GameStatus"

const Game = () => {
  const [state, setState] = useState({
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
    stepNumber: 0,
    xIsNext: true,
    winner: null,
  })

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
        <GameStatus
          xIsNext={state.xIsNext}
          current={state.history[state.history.length - 1].squares}
        />
        <GameHistory history={state.history} jumpTo={jumpTo} />
      </div>
    </div>
  )
}

export default Game
