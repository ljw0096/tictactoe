import styled from "styled-components"
import { SquareType } from "../interfaces"

interface Props {
  children: SquareType
  onClick: () => void
  isWinner: boolean
}

const Square = styled.button<Props>`
  background: ${({ isWinner, theme }) =>
    isWinner ? theme.colors.mainBlack : theme.colors.baseGray};
  color: ${({ isWinner, theme }) => (isWinner ? theme.colors.baseGray : theme.colors.mainBlack)};
  border: 1px solid #999;
  border-radius: 10px;
  float: left;
  font-size: 96px;
  font-weight: bold;
  line-height: 34px;
  height: 100px;
  margin-right: 4px;
  margin-top: 4px;
  padding: 0;
  text-align: center;
  width: 100px;
  :hover {
    background-color: ${({ theme }) => theme.colors.accentGreen};
  }
`

export default Square
