import React from "react";
import "../Cart.scss"
import { connect } from "react-redux"
import ItemAttribues from "../../../components/ItemAttributes/ItemAttribues"
import IconButton from "../../../components/IconButton/IconButton"
import Plus from "../../../assets/svg/Plus.svg"
import Minus from "../../../assets/svg/Minus.svg"
import CartPageItemGallery from "../../../components/cartPageItemGallery/cartPageItemGallery"
export { addAttributeSelectionsIndex }
from "../../../redux/cart/cart.actions"
export { DecreaseItemQuantity, IncreaseItemQuantity, }
from "../../../redux/cart/cart.actions";

const dependecies = {
    React,
    IconButton,
    Plus,
    Minus,
    CartPageItemGallery,
    ItemAttribues,
    connect
}
export default dependecies;