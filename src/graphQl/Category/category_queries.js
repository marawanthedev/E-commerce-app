import {
  gql
} from "@apollo/client";
export const GET_PORDUCTS = gql`
query{
    category{
      products{
        name
        inStock
        gallery
        description
        category
        attributes{
          id
          name
          type
          items{
            displayValue
            value
            id
          }
        }
        prices{
          currency
          amount
        }
      }
    }
  }
`;