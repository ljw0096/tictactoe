import { createThreeByThreeBoard } from "../utils/createThreeByThreeBoard"
import Square from "./Square"

type SquareType = "X" | "O" | null

interface Props {
  squares: SquareType[]
  onClick: (i: number) => void
}

const Board = ({ squares, onClick }: Props) => {
  return (
    <div>
      {createThreeByThreeBoard(squares).map((row, rowIdx) => (
        <div key={rowIdx} className="board-row">
          {row.map((value, index) => (
            <Square value={value} onClick={() => onClick(rowIdx * 3 + index)} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board
