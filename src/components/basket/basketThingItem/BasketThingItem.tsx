import React from 'react'
import './BasketThingItem.scss'

export const BasketThingItem = () => {
  return (
    <div className='basketThingItem'>
        <div className="basketThingItem__info">
            <div className="basketThingItem__brand">Apollo</div>
            <div className="basketThingItem__name">Name</div>
            <div className="basketThingItem__price">5.00 $</div>
            <div className="basketThingItem__title">Size:</div>
            <div className="basketThingItem__sizes">
                <div className="basketThingItem__sizes-item">xs</div>
                <div className="basketThingItem__sizes-item">s</div>
                <div className="basketThingItem__sizes-item">m</div>
                <div className="basketThingItem__sizes-item">l</div>
            </div>
            <div className="basketThingItem__title">Color:</div>
            <div className="basketThingItem__colors">
                <div className="basketThingItem__colors-item"></div>
                <div className="basketThingItem__colors-item"></div>
                <div className="basketThingItem__colors-item"></div>
            </div>
        </div>
       <div className="basketThingItem__countBox">
            <div className="basketThingItem__counts">
                <div className="basketThingItem__counts-btn">+</div>
                <div className="basketThingItem__counts-count">1</div>
                <div className="basketThingItem__counts-btn">-</div>
            </div>
            <div className="basketThingItem__img">
            </div>
       </div>
    </div>
  )
}
