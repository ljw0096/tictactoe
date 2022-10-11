import { SquareType } from "../interfaces"
import { calculateWinner } from "../utils/calculateWinner"

interface Props {
  xIsNext: boolean
  current: SquareType[]
}

const GameStatus = ({ xIsNext, current }: Props) => {
  const winner = calculateWinner(current)
  let status = winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? "X" : "O"}`
  return <div>{status}</div>
}

export default GameStatus
