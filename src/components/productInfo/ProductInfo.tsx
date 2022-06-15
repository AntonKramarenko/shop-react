import React from 'react'
import './ProductInfo.scss'

export const ProductInfo = () => {
  return (
    <div className='productInfo'>
         <div className="productInfo__info">
        <div className="productInfo__brandName">Apollo</div>
        <div className="productInfo__title">Running Short</div>
        <div className="productInfo__price">50.00$</div>
        <div className="productInfo__size">
          <div className="productInfo__title">Size:</div>
          <div className="productInfo__size-items">
            <span className='productInfo__size-item'>xs</span>
            <span className='productInfo__size-item'>s</span>
          </div>
        </div>
        <div className="productInfo__color">
        <div className="productInfo__title">Color:</div>
          <div className="productInfo__color-items">
            <span className='productInfo__color-item'></span>
            <span className='productInfo__color-item'></span>
            <span className='productInfo__color-item'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
