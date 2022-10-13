import styled from "styled-components"
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
            <HistoryItem current={current === move} onClick={() => jumpTo(step)}>
              {desc}
            </HistoryItem>
          </li>
        )
      })}
    </ol>
  )
}

export default HistoryList

const HistoryItem = styled.button<{ current: boolean }>`
  background-color: ${({ current }) => (current ? "black" : "transparent")};
  color: ${({ current }) => (current ? "white" : "black")};
  border: none;
  cursor: pointer;
`
