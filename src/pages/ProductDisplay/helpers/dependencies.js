import React from "react"
import "../ProductDisplay.scss"
import ItemAttribues from "../../../components/ItemAttributes/ItemAttribues"
import { connect } from "react-redux"
import WarningIcon from "../../../assets/svg/warning.svg"
import CloseIcon from "../../../assets/svg/close.svg"
import Zoom from 'react-reveal/Zoom'

export { AddCartItem }
from "../../../redux/cart/cart.actions"
export { addAttributeSelectionsIndex }
from "../../../redux/cart/cart.actions"


const dependecies = {
    React,
    ItemAttribues,
    connect, WarningIcon, CloseIcon,
    Zoom
}
export default dependecies;