import React from 'react'
import './ProductsList.scss'
import {ProductItem} from './productItem/ProductItem'

interface ProductsListProps {
  products: any
}

export const ProductsList: React.FC<ProductsListProps> = (props) => {

  return (
    <div className='productList'>
        {
          props.products.map((item:any) => {
            return (
              <ProductItem 
              id={item.id}
              key={item.id}
              gallery ={item.gallery}
              name={item.name} 
              price={item.prices}
              inStock={item.inStock}/>
            )
          })
        } 
    </div>
  )
}


