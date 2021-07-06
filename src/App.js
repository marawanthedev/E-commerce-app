import './App.css';
import CategoryPage from "./pages/Category/Category"
import { Route } from "react-router-dom";
import NavBar from "./container/Navbar/Navbar";
import ProductDisplayPage from "./pages/ProductDisplay/ProductDisplay"
import CartPage from "./pages/Cart/Cart.jsx"

function App() {
    return ( <
        div className = "App" >
        <
        NavBar > < /NavBar>

        <
        Route exact path = "/"
        component = { CategoryPage } >
        <
        /Route> <
        Route path = "/product_display_page"
        component = { ProductDisplayPage } >
        <
        /Route> <
        Route path = "/cart"
        component = { CartPage } >
        <
        /Route>

        <
        /
        div >
    );
}

export default App;