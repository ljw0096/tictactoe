import { SquareType } from "../interfaces"

interface Props {
  value: SquareType
  onClick: () => void
}

const Square = ({ value, onClick }: Props) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  )
}

export default Square
