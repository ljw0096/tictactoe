export type SquareType = "X" | "O" | null
export interface HistoryType {
  squares: SquareType[]
  squareNumber: number | null
  squareType: SquareType
}
