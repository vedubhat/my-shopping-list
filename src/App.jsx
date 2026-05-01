import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import Title from './components/Title'
import Cart from './components/Cart'
import { CartProvider } from './providers/CartProvider'

function App() {
  
  return (
    <>
      <CartProvider>
        <div className="main">  
          <Title/>
          <SearchBar />
          <Cart/>
        </div>
      </CartProvider>
    </>
  )
}

export default App
