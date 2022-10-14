import { divideArray } from "../utils/ArrayPure"
import Square from "./Square"
import { SquareType, winnerType } from "../interfaces/index"

interface Props {
  squares: SquareType[]
  onClick: (i: number) => void
  winner: winnerType | null
}

const Board = ({ squares, onClick, winner }: Props) => {
  return (
    <div>
      {divideArray(squares, 3).map((row, rowIdx) => (
        <div key={rowIdx} className="board-row">
          {row.map((value, index) => (
            <Square
              onClick={() => onClick(rowIdx * 3 + index)}
              isWinner={winner ? winner.winnerSquare.includes(rowIdx * 3 + index) : false}
            >
              {value}
            </Square>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board
