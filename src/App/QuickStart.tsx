import { useState } from 'react'

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
]

function handleClick() {
  alert('You clicked me!')
}

function MyButton({ count, setCount }) {
  const text = 'this is button'

  return (
    <button onClick={() => setCount(count + 1)} title={'hi, ' + text}>
      {text || 0}
      {count}
    </button>
  )
}

function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen',
      }}
    >
      {product.title}
    </li>
  ))

  return <ul>{listItems}</ul>
}

export default function MyApp() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>欢迎</h1>
      <MyButton count={count} setCount={setCount}></MyButton>
      <MyButton count={count} setCount={setCount}></MyButton>
      <ShoppingList></ShoppingList>
    </div>
  )
}
