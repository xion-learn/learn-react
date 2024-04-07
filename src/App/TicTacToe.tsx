function Square({ text, k }) {
  return (
    <button className="square" key={k}>
      {text}
    </button>
  )
}

export default function Board() {
  const arr = Array(9).fill(0)
  const domArr = []
  const cache = []
  arr.forEach((v, index) => {
    const el = <Square text={index + 1} k={index + 1}></Square>
    cache.push(el)

    if ((index + 1) % 3 === 0) {
      domArr.push(<div>{[...cache]}</div>)
      cache.length = 0
    }
  })
  return <>{domArr}</>
}
