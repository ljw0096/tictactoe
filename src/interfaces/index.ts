export type SquareType = "X" | "O" | null
export interface HistoryType {
  squares: SquareType[]
  squareNumber: number | null
  squareType: SquareType
}

export interface winnerType {
  winner: SquareType
  winnerSquare: number[]
}
