import React from 'react'
import { ProductInfo } from '../../productInfo/ProductInfo'
import './BasketItem.scss'

export default function BasketItem() {


  return (
    <div className='basketItem'>
      <ProductInfo/>
      <div className="basketItem__count">
        <div className='basketItem__count-btn top'>+</div>
        <div className='basketItem__count-btn center'>1</div>
        <div className='basketItem__count-btn bottom'>-</div>
      </div>
      <div className="basketItem__img"></div>
    </div>
  )
}
