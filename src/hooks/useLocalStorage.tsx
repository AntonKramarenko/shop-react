import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Type } from 'typescript'
import { changeBasket } from '../reducers/currentBasket'


// const currentCurrency = useSelector((state: any) => state.currentCurrency.currentCurrency)
//     const dispatch = useDispatch()

export default function useLocalStorage() {
    const dispatch = useDispatch()



    const filterDublicateStorage = (value:any) => {
        // filter dublicate 
    } 

    const  getStorage = () =>{
        const storage:string | null = localStorage.getItem('basket')
        if(storage){
            return JSON.parse(storage)
        }
        return null
    }
    
    const generateKey = (id:string,selectAttributes:Array<Type> ) => {
        let selectKeys = selectAttributes.map((item:any) => {
            let a = Object.keys(item)
            let b = Object.values(item)
            return [a,b].join('')}).join('')
        return id+selectKeys;
    }

    const  reSetStorage = (name:string, value:Array<{}>) => {

        let filterStorageArr = filterDublicateStorage(value)
        // console.log(filterStorageArr);
        
        dispatch(changeBasket(value)) // add state redux
        localStorage.removeItem(name)
        localStorage.setItem(name, JSON.stringify(value))
    }

    const  addToBasketHandler = (id:string, selectAttributes:Array<Type>,  data:Array<Type>) => {
        const storage = getStorage()
        const key =  generateKey(id,selectAttributes)
        const basketStorage = [{key: key, value:1, selectAttributes:selectAttributes, data:data}]

        if(!storage){
            localStorage.setItem('basket', JSON.stringify(basketStorage))
        } else {
            storage.forEach((storageItem:any, index:number) =>{
                if(storageItem.key === key){
                    storageItem.value++
                    basketStorage[index] = (storageItem)
                } else {basketStorage.push(storageItem)}
            })
            reSetStorage('basket', basketStorage)
        }
    }


    const changeAttributesHandler =(id:string, key:string , selectAttributes:any, count:number ) => {

        const storage = getStorage()
        const newKey =  generateKey(id,selectAttributes)
        let basketStorage = []


        if(count !== 0 ){
             basketStorage  = storage.map((item:any) => {
                if(item.key === key){
                   item.key = newKey
                   item.value = count
                   item.selectAttributes = selectAttributes
                   return item
               }else {return item}}
           )
        } else {
            basketStorage  = storage.filter((item:any) => item.key !== key)
        }

       
        reSetStorage('basket', basketStorage)
    };
        


        
    
  return ({addToBasketHandler,getStorage,changeAttributesHandler})
}
