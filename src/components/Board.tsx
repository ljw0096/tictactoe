import Square from "./Square"

type SquareType = "X" | "O" | null

interface Props {
  squares: SquareType[]
  onClick: (i: number) => void
}

const Board = ({ squares, onClick }: Props) => {
  return (
    <div>
      {[0, 1, 2].map((row) => (
        <div key={row} className="board-row">
          {squares.slice(row * 3, row * 3 + 3).map((s, i) => (
            <Square key={row * 3 + i} value={s} onClick={() => onClick(row * 3 + i)} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board
