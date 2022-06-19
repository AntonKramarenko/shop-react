import { gql } from "@apollo/client";

export const GET_BASKET_INFO = (id:string) => gql`
query{
  product(id:"${id}"){
   id,
       name,
       gallery,
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