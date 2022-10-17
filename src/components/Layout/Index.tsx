import { ReactNode } from "react"
import styled from "styled-components"

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  )
}

export default Layout

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Wrapper = styled.div`
  padding-top: 32px;
`
