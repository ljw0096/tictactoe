interface Props {
  value: string
}

const Square = ({ value }: Props) => {
  return <button className="square">{value}</button>
}

export default Square
