// import client from "../../graphQl/server"
// import { GET_PORDUCTS } from "../../graphQl/Category/category_queries"
import { CategoryActionTypes } from "./category_types";

export const getProducts = () => {
  return (dispatch) => {
    // client
    //     .query({
    //         query: GET_PORDUCTS
    //     }).then(result => {

    //     })
    dispatch(productsLoaded());
  };
};

export const updateCategory = (category) => ({
  type: CategoryActionTypes.UPDATE_CATEGORY,
  payload: category,
});
export const productsLoaded = () => ({
  type: CategoryActionTypes.PRODCUTS_LOADED,
});
