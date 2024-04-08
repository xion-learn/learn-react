import { useState } from 'react'

function Square({ text, handler }) {
  return (
    <button onClick={handler} className="square">
      {text}
    </button>
  )
}

export default function Board() {
  const arr = Array(9).fill(null)
  const domArr = []
  const cache = []

  const [squareArr, setSquareArr] = useState(arr)
  const [lastSquare, setLastSquare] = useState(null)

  const handleClick = (i) => {
    if (calculateWinner(squareArr) || squareArr[i]) {
      return
    }
    const tempArr = [...squareArr]
    const s = lastSquare === 'X' ? 'O' : 'X'

    tempArr[i] = s
    setLastSquare(s)
    setSquareArr(tempArr)
  }

  arr.forEach((v, index) => {
    const el = <Square text={squareArr[index]} handler={() => handleClick(index)}></Square>
    cache.push(el)

    if ((index + 1) % 3 === 0) {
      domArr.push(<div className="square-line">{[...cache]}</div>)
      cache.length = 0
    }
  })

  console.log(111)
  const winner = calculateWinner(squareArr)
  let status = winner ? 'Winner: ' + winner : 'Next player: ' + (lastSquare === 'X' ? 'O' : 'X')

  return (
    <>
      <div className="status">{status}</div>
      {domArr}
    </>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
