import React from 'react'
import './ProductsList.scss'
import ProductItem from './productItem/ProductItem'

export default function ProductsList() {
  return (
    <div className='productList'>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>    
    </div>
  )
}
