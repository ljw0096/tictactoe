import styled from "styled-components"
import { SquareType } from "../interfaces"

interface Props {
  value: SquareType
  onClick: () => void
  isWinnerSquare: boolean
}

const Square = ({ value, onClick, isWinnerSquare }: Props) => {
  return (
    <SquareItem className={`square${isWinnerSquare ? " winner" : ""}`} onClick={onClick}>
      {value}
    </SquareItem>
  )
}

export default Square

const SquareItem = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 96px;
  font-weight: bold;
  line-height: 34px;
  height: 100px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 100px;
`
