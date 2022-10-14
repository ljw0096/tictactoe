import styled from "styled-components"
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc"
import { IoMdRefresh } from "react-icons/io"

interface Props {
  goFront: () => void
  goBack: () => void
  resetGame: () => void
}

const GameInterface = ({ goFront, goBack, resetGame }: Props) => {
  return (
    <InterfaceContainer>
      <GoBackIcon onClick={goBack} />
      <GoFrontIcon onClick={goFront} />
      <ResetIcon onClick={resetGame} />
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
const GoBackIcon = styled(VscTriangleLeft)`
  cursor: pointer;
`

const GoFrontIcon = styled(VscTriangleRight)`
  cursor: pointer;
`
const ResetIcon = styled(IoMdRefresh)`
  cursor: pointer;
`
