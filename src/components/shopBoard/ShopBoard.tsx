import React from 'react'
import SelectCurrency from '../selectCurrency/SelectCurrency'
import ProductsList from './productsList/ProductsList'
import './ShopBoard.scss'

export default function ShopBoard() {
  return (
    <div className='shopBoard'>
        <h3 className="shopBoard__title">Title</h3>
        <ProductsList/>
    </div>
  )
}
