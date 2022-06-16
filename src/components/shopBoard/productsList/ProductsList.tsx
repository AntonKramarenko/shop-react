import React from 'react'
import './ProductsList.scss'
import {ProductItem} from './productItem/ProductItem'
import { NavLink } from 'react-router-dom'

interface ProductsListProps {
  products: any,
  title: string
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
              category={props.title}
              inStock={item.inStock}/>
              
            )
          })
        } 
    </div>
  )
}


