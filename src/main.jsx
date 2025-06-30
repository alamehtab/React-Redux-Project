import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import productsReducer from './features/products/productSlice.js'
import cartReducer from './features/cart/cartSlice.js'

export const store = configureStore({
  reducer:{
    product:productsReducer,
    cart:cartReducer
  }
})

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
)
