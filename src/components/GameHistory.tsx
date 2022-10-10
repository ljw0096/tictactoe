type Square = "X" | "O" | null

type HistoryType = {
  squares: Square[]
}

interface Props {
  history: HistoryType[]
  jumpTo: (i: number) => void
}

const GameHistory = ({ history, jumpTo }: Props) => {
  return (
    <ol>
      {history.map((step, move) => {
        const desc = move ? `Go to move #${move}` : `Go to game start`
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{desc}</button>
          </li>
        )
      })}
    </ol>
  )
}

export default GameHistory
