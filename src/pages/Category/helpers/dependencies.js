import React from "react"
import CategoryItem from "../../../components/CategoryItem/CategoryItem"
import "../Category.scss";
import { connect } from "react-redux"
export { AddCartItem, IncreaseItemQuantity, DecreaseItemQuantity, RemoveItem }
from "../../../redux/cart/cart.actions"
export { getProducts }
from "../../../redux/category/category_action"

const dependecies = {
    React,
    CategoryItem,
    connect
}
export default dependecies;