import { useState } from 'react'
import './App.css'
import LoadProducts from './components/products/loadProducts'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hi Mohan from react19</h1>
      <LoadProducts/>
    </>
  )
}

export default App
