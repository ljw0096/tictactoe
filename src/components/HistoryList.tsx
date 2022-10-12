import { HistoryType } from "../interfaces"
import { reverseArray } from "../utils/ArrayPure"

interface Props {
  history: HistoryType[]
  jumpTo: (i: number) => void
  reverse: boolean
  currentStep: number
}

const HistoryList = ({ history, jumpTo, reverse, currentStep }: Props) => {
  const renderArray = reverse ? reverseArray(history) : history
  const current = reverse ? renderArray.length - currentStep - 1 : currentStep
  return (
    <ol>
      {renderArray.map(({ squareType, squareNumber }, move) => {
        const step = reverse ? renderArray.length - move - 1 : move
        const desc = squareType
          ? `'${squareType}' player put on ${squareNumber}`
          : `Go to game start`
        return (
          <li key={move}>
            <button className={current === move ? "currentStep" : ""} onClick={() => jumpTo(step)}>
              {desc}
            </button>
          </li>
        )
      })}
    </ol>
  )
}

export default HistoryList
