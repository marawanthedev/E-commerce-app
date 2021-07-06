import { GET_PORDUCTS } from "./category_queries"
import client from "../server"

export const getData = () => {

    return (dispatch) => {

        client
            .query({
                query: GET_PORDUCTS
            }).then(result => {

            })
    }
}