import { useState } from "react"
import { HistoryType } from "../interfaces"
import { calculateWinner } from "../utils/calculateWinner"

interface State {
  history: HistoryType[]
  stepNumber: number
  xIsNext: boolean
}

const useGame = () => {
  const [state, setState] = useState<State>({
    history: [
      {
        squares: Array(9).fill(null),
        squareNumber: null,
        squareType: null,
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
      history: [...history, { squares: squares, squareNumber: i, squareType: squares[i] }],
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
    draw: state.stepNumber === 9 && !calculateWinner(state.history[state.stepNumber].squares),
    currentSquares: state.history[state.stepNumber].squares,
    winner: calculateWinner(state.history[state.stepNumber].squares),
    handleClick,
    jumpTo,
  }
}

export default useGame
