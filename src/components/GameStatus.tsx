import styled from "styled-components"
import { winnerType } from "../interfaces"

interface Props {
  xIsNext: boolean
  winner: winnerType | null
  draw: boolean
}

const GameStatus = ({ xIsNext, winner, draw }: Props) => {
  return (
    <StatusMessage>
      {draw ? "Draw" : winner ? `${winner.winner} win!` : `${xIsNext ? "X" : "O"} turn`}
    </StatusMessage>
  )
}

export default GameStatus

const StatusMessage = styled.div`
  color: ${({ theme }) => theme.colors.baseGray};
  font-size: ${({ theme }) => theme.fontSize.title}px;
`
