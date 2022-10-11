import Board from "./Board"
import GameHistory from "./GameHistory"
import GameStatus from "./GameStatus"
import useGame from "../hooks/useGame"

const Game = () => {
  const { handleClick, currentSquares, xIsNext, history, jumpTo } = useGame()

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <GameStatus xIsNext={xIsNext} current={currentSquares} />

        <GameHistory history={history} jumpTo={jumpTo} />
      </div>
    </div>
  )
}

export default Game
