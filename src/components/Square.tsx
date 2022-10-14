import styled from "styled-components"
import { SquareType } from "../interfaces"

interface Props {
  children: SquareType
  onClick: () => void
  isWinner: boolean
}

const Square = styled.button<Props>`
  background: ${({ isWinner }) => (isWinner ? "#000" : "#fff")};
  color: ${({ isWinner }) => (isWinner ? "#fff" : "#000")};
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

export default Square
