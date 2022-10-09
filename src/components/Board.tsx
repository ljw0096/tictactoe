import Square from "./Square"

type SquareType = "X" | "O" | null

interface Props {
  squares: SquareType[]
  onClick: (i: number) => void
}

const Board = ({ squares, onClick }: Props) => {
  const renderSquare = (i: number) => (
    <Square
      value={squares[i]}
      onClick={() => {
        onClick(i)
      }}
    />
  )

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board
