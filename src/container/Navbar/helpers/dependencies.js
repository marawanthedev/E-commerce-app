import React from "react"
import Logo from "../../../assets/svg/a-logo.svg"
import USD from "../../../assets/svg/USD.svg"
import JPY from "../../../assets/svg/JPY.svg"
import GBP from "../../../assets/svg/GBP.svg"
import ChevronIcon from "../../../assets/svg/chevron.svg"
import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce'
import { connect } from "react-redux"
import CartIcon from "../../../components/cart-icon/cart-icon.component"
import CartDropDown from "../../cart-dropdown/cart-dropdown.component";
import "../Navbar.scss"
import { Link } from "react-router-dom";

const dependecies = {
    React,
    Logo,
    USD,
    JPY,
    GBP,
    ChevronIcon,
    Zoom,
    Bounce,
    connect,
    CartIcon,
    CartDropDown,
    Link
}
export default dependecies;