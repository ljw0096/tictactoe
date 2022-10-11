import { SquareType } from "../interfaces"

interface Props {
  value: SquareType
  onClick: () => void
  isWinnerSquare: boolean
}

const Square = ({ value, onClick, isWinnerSquare }: Props) => {
  return (
    <button className={`square${isWinnerSquare ? " winner" : ""}`} onClick={onClick}>
      {value}
    </button>
  )
}

export default Square
