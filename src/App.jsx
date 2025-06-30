import { useEffect, useState } from 'react'
import './App.css'
import Product from './features/products/Product'
import Cart from './features/cart/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItemsAsync } from './features/cart/cartSlice'

function App() {
  const [count, setCount] = useState(0)
  const [showCart, setShowCart] = useState(false)
  const items = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchItemsAsync())
  }, [])

  return (
    <>
      <button style={{ position: 'fixed', top: '20px', right: '100px', zIndex: 1000 }} onClick={() => setShowCart(!showCart)}>{showCart ? 'Hide Cart' : 'Show Cart'} [{items.length}] </button>
      <div style={{marginTop:'60px'}}>
        {
          showCart ? <Cart /> : <Product />
        }
      </div>
    </>
  )
}

export default App
