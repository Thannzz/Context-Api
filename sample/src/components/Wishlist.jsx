import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const Wishlist = () => {
    const {count} = useContext(CartContext)
  return (
    <div>Wishlist: {count}</div>
  )
}
