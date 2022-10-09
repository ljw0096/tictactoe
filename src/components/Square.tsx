interface Props {
  value: "X" | "O" | null
  onClick: () => void
}

const Square = ({ value, onClick }: Props) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  )
}

export default Square
