import { SquareType } from "../interfaces"

export const createThreeByThreeBoard = (squares: SquareType[]) => {
  const sq = squares.slice()
  const result = []
  while (sq.length) {
    result.push(sq.splice(0, 3))
  }
  return result
}
