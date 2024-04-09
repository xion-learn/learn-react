import { useState } from 'react'

export default function Game() {
  const [historyArr, setHistoryArr] = useState([Array(9).fill(null)])
  const [currentStep, setCurrentStep] = useState(0)

  const squareArr = historyArr[currentStep]
  const currentSquare = currentStep % 2 === 0 ? 'X' : 'O'

  const handleClick = (i: number) => {
    if (calculateWinner(squareArr) || squareArr[i]) {
      return
    }
    setCurrentStep(currentStep + 1)
    const tempArr = [...squareArr]
    tempArr[i] = currentSquare
    setHistoryArr([...historyArr.slice(0, currentStep + 1), tempArr])
  }

  const backtracking = (i) => {
    setCurrentStep(i)
  }

  const buttonArr = historyArr.map((history, index) => {
    const description =
      index === 0 ? 'Go to game start' : 'Go to move #' + index
    return (
      <li key={index}>
        <button onClick={() => backtracking(index)}>{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squareArr={squareArr}
          currentSquare={currentSquare}
          onPlay={handleClick}
        />
      </div>
      <div className="game-info">
        <ol>{buttonArr}</ol>
      </div>
    </div>
  )
}

function Board({ squareArr, currentSquare, onPlay }) {
  const arr = Array(9).fill(null)
  const domArr = []
  const cache = []

  arr.forEach((v, index) => {
    const el = (
      <Square text={squareArr[index]} handler={() => onPlay(index)}></Square>
    )
    cache.push(el)

    if ((index + 1) % 3 === 0) {
      domArr.push(<div className="square-line">{[...cache]}</div>)
      cache.length = 0
    }
  })

  console.log(111)
  const winner = calculateWinner(squareArr)
  let status = winner ? 'Winner: ' + winner : 'Next player: ' + currentSquare

  return (
    <div>
      <div className="status">{status}</div>
      {domArr}
    </div>
  )
}

function Square({ text, handler }) {
  return (
    <button onClick={handler} className="square">
      {text}
    </button>
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
