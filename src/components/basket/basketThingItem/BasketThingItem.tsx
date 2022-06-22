import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Type } from 'typescript';
import { GET_PRODUCTS_INFO } from '../../../query/getProducts';
import { Product } from '../../../types';
import { Loader } from '../../loader/Loader';

import './BasketThingItem.scss'

interface BasketThingItemProps  {
    basketThingID: string,
    count: number,
    selectAttributes: Array<Type>[],
    product: any,
    
}

export const BasketThingItem: React.FC<BasketThingItemProps> = (props) => {





return (
    <div className='basketThingItem'>
                     <div className="basketThingItem__info">
                         <div className="basketThingItem__brand">Name</div>
                         <div className="basketThingItem__name">Brand</div>
                         <div className="basketThingItem__price">
                    {/* {
                         productInfo.product.prices.map((item:any) => {
                            if(item.currency.label === currency.label){
                                return  `${item.currency.symbol} ${item.amount * countProduct} `
                       }})
                     } */}
                        </div>
                        {/* {
                           productInfo.product.attributes.map((attributes:any, indexAttribute:number) => {
                               if(attributes.name === 'Color'){
                                    return (
                                     <div key={indexAttribute} className="productPage__attributes">
                                        <div className="productPage__title">{attributes.name}</div>
                                        <div className="productPage__attributes-items">
                                                 {attributes.items.map((item:any, index:number) =>{
                                                    return (
                                                        <span 
                                                        key={index} 
                                                        className={
                                                            (selectAttributes.length !== 0 && item.id == selectAttributes[indexAttribute][attributes.name])
                                                                ? 'active-box'
                                                                : ''
                                                        }
                                                        >
                                                            <span key={index} 
                                                            id={item.id}
                                                            className='productPage__attributes-item' 
                                                            onClick={() => selectAttributesHandler(attributes.name, item.id)}
                                                            style={{backgroundColor: `${item.value}`}} /> 
                                                        </span>
                                                )})}
                                        </div>
                                    </div>
                                    ) 
                                }
                                return (
                                    <div key={indexAttribute} className="productPage__attributes">
                                    <div className="productPage__title">{attributes.name}:</div>
                                    <div className="productPage__attributes-items">
                                             {attributes.items.map((item:any, indexItem:number) =>{
                                             
                                                return (
                                                    <span  
                                                    id={item.id}
                                                    key={indexItem} 
                                                    className={
                                                        (selectAttributes.length !== 0 && item.id == selectAttributes[indexAttribute][attributes.name] )
                                                            ? 'productPage__attributes-item active-attribute'
                                                            : 'productPage__attributes-item'
                                                    }
                                                     onClick={() => selectAttributesHandler(attributes.name, item.id)}
                                                    >
                                                        {item.value}</span>
                                            )})}
                                    </div>
                                </div>
                                )
                            })
                        }    */}
    
                    </div>
    
                    
              
                    <div className="basketThingItem__countBox">
                        <div className="basketThingItem__counts">
                            <div 
                            className="basketThingItem__counts-btn"
                            
                            >+</div>
                            <div className="basketThingItem__counts-count">{1}</div>
                            <div 
                            className="basketThingItem__counts-btn"
                            
                            >-</div>
                        </div>
                        <div className="basketThingItem__img">
                           <div className='basketThingItem__changers'>
                                  <span className='basketThingItem__changer' > +</span>
                                  <span className='basketThingItem__changer'> - </span>
                           </div>
                           
                            <img src='' alt="" />
                        </div>
                     </div>
                </div>
    
              
    )
}
