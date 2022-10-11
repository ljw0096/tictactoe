export const divideArray = (array: any[], offset?: number) => {
  const copied = array.slice()
  const result = []
  while (copied.length) {
    result.push(copied.splice(0, offset))
  }
  return result
}

export const reverseArray = (array: any[]) => {
  const copied = array.slice()
  return copied.reverse()
}
