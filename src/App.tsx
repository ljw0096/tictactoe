import { ThemeProvider } from "styled-components"
import Game from "./components/Game"
import GlobalStyles from "./styles/GlobalStyles"
import theme from "./styles/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Game />
    </ThemeProvider>
  )
}

export default App
