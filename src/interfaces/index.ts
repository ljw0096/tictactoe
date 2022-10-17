export type SquareType = "X" | "O" | undefined
export interface HistoryType {
  squares: SquareType[]
  squareNumber: number | null
  squareType: SquareType
}

export interface winnerType {
  winner: SquareType
  winnerSquare: number[]
}
