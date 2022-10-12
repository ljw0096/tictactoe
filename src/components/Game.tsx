import Board from "./Board"
import GameHistory from "./GameHistory"
import GameStatus from "./GameStatus"
import useGame from "../hooks/useGame"

const Game = () => {
  const { handleClick, stepNumber, draw, currentSquares, xIsNext, history, jumpTo, winner } =
    useGame()

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares} onClick={handleClick} winner={winner} />
      </div>
      <div className="game-info">
        <GameStatus xIsNext={xIsNext} winner={winner} draw={draw} />
        <GameHistory history={history} jumpTo={jumpTo} currentStep={stepNumber} />
      </div>
    </div>
  )
}

export default Game
