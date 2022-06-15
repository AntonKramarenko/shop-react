import React from 'react'
import { ProductInfo } from '../productInfo/ProductInfo'
import './ProductPage.scss'

export const ProductPage = () => {
  return (
    <div className='productPage'>
            <div className="productPage__imgs">
                <div className="productPage__imgs-select">
                    <div className="productPage__img">
                        <img src="" alt="" />
                    </div>
                    <div className="productPage__img">
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="productPage__img-main">
                    <img src='' alt=''/>
                </div>
            </div>
            <div className="productPage__info">
                <div className="productPage__brandName">Apollo</div>
                <div className="productPage__brandName-title">Running Short</div>

                <div className="productPage__size">
                    <div className="productPage__title">Size:</div>
                    <div className="productPage__size-items">
                        <span className='productPage__size-item'>xs</span>
                        <span className='productPage__size-item'>s</span>
                    </div>
                </div>
                <div className="productPage__color">
                    <div className="productPage__title">Color:</div>
                    <div className="productPage__color-items">
                        <span className='productPage__color-item'></span>
                        <span className='productPage__color-item'></span>
                        <span className='productPage__color-item'></span>
                    </div>
                </div>
                <div className="productPage__price">
                    <div className="productPage__title">Price:</div>
                    <div className="productPage__price-count">$50.00</div>
                </div>


                <button className='productPage__btn'>Add to card</button>
                <p className="productPage__description">
                Find stunning women's cocktail dresses and party 
                dresses. Stand out in lace and metallic cocktail 
                dresses and party dresses from all your favorite 
                brands.
                </p>
            </div>
    </div>
  )
}
