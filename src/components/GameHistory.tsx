import { HistoryType } from "../interfaces"

interface Props {
  history: HistoryType[]
  jumpTo: (i: number) => void
}

const GameHistory = ({ history, jumpTo }: Props) => {
  return (
    <ol>
      {history.map(({ squareType, squareNumber }, move) => {
        const desc = move ? `'${squareType}' player put on ${squareNumber}` : `Go to game start`
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
