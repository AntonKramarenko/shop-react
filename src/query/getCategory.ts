import { gql } from "@apollo/client";

export const GET_ALL_CATEGORY = gql`
query{
	categories {
    name,
    products {
      id,
      name,
      inStock,
      gallery,
      prices{
        currency{
          label,
          symbol
        },
        amount
      }
    }
  }
}
`

