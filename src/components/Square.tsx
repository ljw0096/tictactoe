import styled from "styled-components"
import { SquareType } from "../interfaces"
import { GrClose } from "react-icons/gr"
import { BiCircle } from "react-icons/bi"
interface Props {
  value: SquareType
  onClick: () => void
  isWinner: boolean
}

const Square = ({ value, onClick, isWinner }: Props) => {
  return (
    <StyledSquare onClick={onClick} isWinner={isWinner} value={value}>
      {value === "O" ? <BiCircle /> : value === "X" ? <GrClose /> : undefined}
    </StyledSquare>
  )
}

const StyledSquare = styled.button<{ isWinner: boolean; value: SquareType }>`
  background: ${({ isWinner, theme }) =>
    isWinner ? theme.colors.accentBlue : theme.colors.baseGray};
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
    ${({ theme, value, isWinner }) =>
      !isWinner && !value && `background-color: ${theme.colors.accentGreen}`}
  }
`

export default Square
