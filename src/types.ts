export interface Category {
    name: string
  }
  
  export interface Currency {
    label: string
    symbol: string
  }
  
  export interface Price {
    amount: number
    currency: Currency
  }
  
  export interface Attribute {
    id: string
    value: string
    displayValue: string
  }
  
  export enum AttributeSetType {
    text = 'text',
    swatch = 'swatch',
  }
  
  export interface AttributeSet {
    id: string
    name: string
    type: AttributeSetType
    items: Attribute[]
  }
  
  export interface AttributeSelection {
    [id: string]: string;
  }
  
  export interface Product {
    id: string
    brand: string
    name: string
    gallery: string[]
    prices: Price[]
    attributes: AttributeSet[]
    inStock: boolean
    description: string
  }
  
  export type CartProduct = Pick<Product,
    | 'id'
    | 'brand'
    | 'name'
    | 'gallery'
    | 'prices'
    | 'attributes'
  >
  
  export type ProductTile = Pick<Product,
    | 'id'
    | 'brand'
    | 'name'
    | 'inStock'
    | 'gallery'
    | 'prices'
    | 'attributes'
  >
  
  export interface CartItem {
    key: string
    attributeSelection: AttributeSelection
    count: number
    product: CartProduct
  }

 
  