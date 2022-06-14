import React from 'react'
import './BasketItem.scss'

export default function BasketItem() {


  return (
    <div className='basketItem'>
      <div className="basketItem__info">
        <div className="basketItem__title">Apollo Running Short</div>
        <div className="basketItem__price">50.00$</div>
        <div className="basketItem__size">
          <div className="basketItem__title">Size:</div>
          <div className="basketItem__size-items">
            <span className='basketItem__size-item'>xs</span>
            <span className='basketItem__size-item'>s</span>
          </div>
        </div>
        <div className="basketItem__color">
        <div className="basketItem__title">Color:</div>
          <div className="basketItem__color-items">
            <span className='basketItem__color-item'></span>
            <span className='basketItem__color-item'></span>
            <span className='basketItem__color-item'></span>
          </div>
        </div>
      </div>
      <div className="basketItem__count">
        <div className='basketItem__count-btn top'>+</div>
        <div className='basketItem__count-btn center'>1</div>
        <div className='basketItem__count-btn bottom'>-</div>
      </div>
      <div className="basketItem__img"></div>
    </div>
  )
}
