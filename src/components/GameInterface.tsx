import styled from "styled-components"
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc"
import { IoMdRefresh } from "react-icons/io"
const GameInterface = () => {
  return (
    <InterfaceContainer>
      <VscTriangleLeft></VscTriangleLeft>
      <VscTriangleRight></VscTriangleRight>
      <IoMdRefresh></IoMdRefresh>
    </InterfaceContainer>
  )
}

export default GameInterface

const InterfaceContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  width: 120px;
  height: 32px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.baseGray};
  color: ${({ theme }) => theme.colors.mainBlack};
`
