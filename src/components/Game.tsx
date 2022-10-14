import Board from "./Board"
import GameStatus from "./GameStatus"
import useGame from "../hooks/useGame"
import styled from "styled-components"
import GameInterface from "./GameInterface"

const Game = () => {
  const { handleClick, draw, currentSquares, xIsNext, goFront, goBack, resetGame, winner } =
    useGame()

  return (
    <GameContainer>
      <GameStatus xIsNext={xIsNext} winner={winner} draw={draw} />
      <Board squares={currentSquares} onClick={handleClick} winner={winner} />
      <GameInterface goFront={goFront} goBack={goBack} resetGame={resetGame} />
    </GameContainer>
  )
}

export default Game

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 350px;
  gap: 10px;
`
