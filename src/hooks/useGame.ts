import { useState } from "react"
import { calculateWinner } from "../utils/calculateWinner"

const useGame = () => {
  const [state, setState] = useState({
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
    stepNumber: 0,
    xIsNext: true,
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

  return {
    history: state.history,
    stepNumber: state.stepNumber,
    xIsNext: state.xIsNext,
    currentSquares: state.history[state.stepNumber].squares,
    handleClick,
    jumpTo,
  }
}

export default useGame
