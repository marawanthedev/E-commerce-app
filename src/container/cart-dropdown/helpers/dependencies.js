import React from "react";
import "../cart-dropdown.styles.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartItem from "../../../components/cart-drop-down-items/cart-drop-down-items.component"
import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom'

export { DecreaseItemQuantity, IncreaseItemQuantity, ToggleCartDropDown }
from "../../../redux/cart/cart.actions";

export const dependecies = {
    React,
    connect,
    withRouter,
    CartItem,
    Zoom,
    Link
}