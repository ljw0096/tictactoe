import { winnerType } from "../interfaces"

interface Props {
  xIsNext: boolean
  winner: winnerType | null
}

const GameStatus = ({ xIsNext, winner }: Props) => {
  return <div>{winner ? `Winner: ${winner.winner}` : `Next Player: ${xIsNext ? "X" : "O"}`}</div>
}

export default GameStatus
