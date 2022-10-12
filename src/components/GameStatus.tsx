import { winnerType } from "../interfaces"

interface Props {
  xIsNext: boolean
  winner: winnerType | null
  draw: boolean
}

const GameStatus = ({ xIsNext, winner, draw }: Props) => {
  return (
    <div>
      {draw ? "draw" : winner ? `Winner: ${winner.winner}` : `Next Player: ${xIsNext ? "X" : "O"}`}
    </div>
  )
}

export default GameStatus
