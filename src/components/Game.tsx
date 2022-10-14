import Board from "./Board"
import GameHistory from "./GameHistory"
import GameStatus from "./GameStatus"
import useGame from "../hooks/useGame"
import styled from "styled-components"

const Game = () => {
  const { handleClick, stepNumber, draw, currentSquares, xIsNext, history, jumpTo, winner } =
    useGame()

  return (
    <GameContainer>
      <div>
        <Board squares={currentSquares} onClick={handleClick} winner={winner} />
      </div>
      <div>
        <GameStatus xIsNext={xIsNext} winner={winner} draw={draw} />
        <GameHistory history={history} jumpTo={jumpTo} currentStep={stepNumber} />
      </div>
    </GameContainer>
  )
}

export default Game

const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
`
