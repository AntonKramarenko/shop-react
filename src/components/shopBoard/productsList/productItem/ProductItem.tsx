import React from 'react'
import './ProductItem.scss'


export default function ProductItem() {
  return (
    <div className='productItem'>
        <div className='productItem__img'>
            <img src="" alt="" />
        </div>
        <div className="productItem__title">productItem__title</div>
        <div className="productItem__price">50.00$</div>
    </div>
  )
}
