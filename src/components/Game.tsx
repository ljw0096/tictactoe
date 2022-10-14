import Board from "./Board"
import GameHistory from "./GameHistory"
import GameStatus from "./GameStatus"
import useGame from "../hooks/useGame"
import styled from "styled-components"
import GameInterface from "./GameInterface"

const Game = () => {
  const { handleClick, stepNumber, draw, currentSquares, xIsNext, history, jumpTo, winner } =
    useGame()

  return (
    <GameContainer>
      <GameStatus xIsNext={xIsNext} winner={winner} draw={draw} />
      <Board squares={currentSquares} onClick={handleClick} winner={winner} />
      <GameInterface />
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
