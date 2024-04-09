import { useState } from 'react'

export default function ProductList() {
  const [searchBarValue, setSearchBarValue] = useState('')
  const [checkBoxValue, setCheckBoxValue] = useState(false)

  const list = PRODUCTS.filter(
    (item) =>
      (!checkBoxValue || item.stocked) && item.name.includes(searchBarValue)
  )

  return (
    <>
      <SearchBar value={searchBarValue} onValueChange={setSearchBarValue} />
      <CheckBox value={checkBoxValue} onValueChange={setCheckBoxValue} />
      <List list={list} />
    </>
  )
}

function SearchBar({ value, onValueChange }) {
  return <input value={value} onChange={(e) => onValueChange(e.target.value)} />
}

function CheckBox({ value, onValueChange }) {
  return (
    <div>
      <input
        type="checkbox"
        value={value}
        onChange={(e) => onValueChange(e.target.checked)}
      />
      'Only show products in stock'
    </div>
  )
}

function List({ list }) {
  const categories: { [key: string]: any[] } = {}
  list.forEach((item) => {
    const el = (
      <li key={item.name} style={!item.stocked ? { color: 'red' } : {}}>
        {item.price}&nbsp;&nbsp;&nbsp;{item.name}
      </li>
    )
    categories[item.category] = [...(categories[item.category] || []), el]
  })

  const domList = []
  for (const categoriesKey in categories) {
    domList.push(
      <div key={categoriesKey}>
        <div>{categoriesKey}</div>
        <ul>{categories[categoriesKey]}</ul>
      </div>
    )
  }

  return <>{domList}</>
}

interface Product {
  category: string
  price: string
  stocked: boolean
  name: string
}

const PRODUCTS: Product[] = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
]
