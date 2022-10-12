import { useState } from "react"
import { HistoryType } from "../interfaces"
import HistoryList from "./HistoryList"

interface Props {
  history: HistoryType[]
  jumpTo: (i: number) => void
  currentStep: number
}

const GameHistory = ({ history, jumpTo, currentStep }: Props) => {
  const [toggle, setToggle] = useState(true)

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>toggle</button>
      <HistoryList history={history} jumpTo={jumpTo} reverse={toggle} currentStep={currentStep} />
    </>
  )
}

export default GameHistory
