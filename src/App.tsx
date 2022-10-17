import { ThemeProvider } from "styled-components"
import Game from "./components/Game"
import Layout from "./components/Layout/Index"
import GlobalStyles from "./styles/GlobalStyles"
import theme from "./styles/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Game />
      </Layout>
    </ThemeProvider>
  )
}

export default App
