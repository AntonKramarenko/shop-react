import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Type } from 'typescript'
import { changeBasket } from '../reducers/currentBasket'


// const currentCurrency = useSelector((state: any) => state.currentCurrency.currentCurrency)
//     const dispatch = useDispatch()

export default function useLocalStorage() {
    const dispatch = useDispatch()




    function getStorage(){
        const storage:string | null = localStorage.getItem('basket')
        if(storage){
            return JSON.parse(storage)
        }
        return null
    }
    
    function generateKey(id:string,selectAttributes:Array<Type> ){
        let selectKeys = selectAttributes.map((item:any) => {
            let a = Object.keys(item)
            let b = Object.values(item)
            return [a,b].join('')}).join('')
        return id+selectKeys;
    }

    function reSetStorage(name:string, value:Array<{}> ){

        dispatch(changeBasket(value)) // add state redux
        localStorage.removeItem(name)
        localStorage.setItem(name, JSON.stringify(value))
    }

    function addToBasketHandler(id:string, selectAttributes:Array<Type>,  data:Array<Type>) {
        const storage = getStorage()
        const key =  generateKey(id,selectAttributes )
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
    




  return ({addToBasketHandler,getStorage})
}
