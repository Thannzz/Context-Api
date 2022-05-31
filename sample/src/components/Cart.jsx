import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const Cart = () => {
    const {Count,setCount} = useContext(CartContext)
  return (
    <div>Cart
        <button>Add to cart</button>
    </div>
  )
}
