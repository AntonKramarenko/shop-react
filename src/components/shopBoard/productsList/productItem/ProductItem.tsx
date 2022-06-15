import React from 'react'
import { useSelector } from 'react-redux'
import './ProductItem.scss'

interface ProductItemProps {
  name: string,
  price:any,
  gallery: any,
  inStock:boolean,
  id: string
}

export const ProductItem: React.FC<ProductItemProps> = (props)  => {

  const currency = useSelector((state:any) => state.currentCurrency.currentCurrency)

  if(props.inStock){
    return (
      <div className='productItem'>
          <div className='productItem__img'>
              <div className='productItem__img-outOfStock'></div>
              <span className='productItem__title-outOfStock outOfStock'>Out of Stock</span>
              <img src={props.gallery[0]} alt="" />
          </div>
          <div className="productItem__title outOfStock">{props.name}</div>
          <div className="productItem__price outOfStock">
            {
              props.price.map((item:any) => {
                if(item.currency.label === currency.label){
                  return  `${item.currency.symbol} ${item.amount}`
                }})
            }
          </div>
      </div>
    )
  }

  return (
    <div className='productItem'>
        <div className='productItem__img'>
            <img src={props.gallery[0]} alt="" />
        </div>
        <div className="productItem__title">{props.name}</div>
        <div className="productItem__price">
            {
              props.price.map((item:any) => {
                if(item.currency.label === currency.label){
                  return `${item.currency.symbol}${item.amount}`
                }})
            }
        </div>
    </div>
  )
}
