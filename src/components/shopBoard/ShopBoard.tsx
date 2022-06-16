import React from 'react'
import {ProductsList} from './productsList/ProductsList'
import './ShopBoard.scss'

interface ShopBoardProps {
  products: any,
  title: string
}

export  const  ShopBoard: React.FC<ShopBoardProps> = (props) => {
  
  return (
    <div className='shopBoard'>
        <h3 className="shopBoard__title">{props.title}</h3>
        <ProductsList products={props.products} title={props.title} />
    </div>
  )
}
