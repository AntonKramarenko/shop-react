import { gql } from "@apollo/client";

export const GET_PRODUCTS_INFO = (id:string) => gql`
query{
  product(id:"${id}"){
   id,
       name,
       inStock,
       gallery,
       description,
       category,
       attributes{
         id,
         name,
         type,
         items{
           displayValue,value,id
         }
       },
       prices{
         currency{
           label,
           symbol
         },
         amount
       },
       brand
 }
 }

`