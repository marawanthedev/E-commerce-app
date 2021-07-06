
import { dependecies } from "./helpers/dependencies.js"
import { DecreaseItemQuantity, IncreaseItemQuantity, ToggleCartDropDown } from "./helpers/dependencies.js";


class CartDropDown extends dependecies.React.PureComponent {

    constructor (props) {
        super(props);
        this.state = {}
    }

    render() {
        const { CartItem, Zoom, Link } = dependecies;
        const { cartItems, DecreaseItemQuantity, IncreaseItemQuantity, selectedCurrency, selectedCurrencySymbol, itemCount, totalPrice, ToggleCartDropDown } = this.props;
        return (

            <Zoom><div className="cart-dropdown ">
                <div className="cart-dropdown__items-count-container">
                    My Bag. <span className="cart-dropdown__items-count">{itemCount} items</span>
                </div>
                <ul className="cart-items">
                    {cartItems.length > 0 ? cartItems.map(({ ...cartData }, index) => {

                        return <CartItem key={index} selectedCurrency={selectedCurrency} ToggleCartDropDownCallBack={ToggleCartDropDown} selectedCurrencySymbol={selectedCurrencySymbol} DecreaseItemQuantity={DecreaseItemQuantity} IncreaseItemQuantity={IncreaseItemQuantity}    {...cartData} item={cartData}></CartItem>
                    }) : null}
                </ul>
                <div className="cart-dropdown__total-price">

                    <span>Total</span>
                    <span>{totalPrice}{selectedCurrencySymbol}</span>

                </div>
                <div className="buttons-container">

                    <Link to="/cart" onClick={() => ToggleCartDropDown()} style={{ textDecoration: "none", width: "calc((100% / 2) - 1rem)" }} >
                        <button className="buttons-container__button buttons-container__button__viewbag" style={{ width: "100%" }}>
                            View Bag
                        </button></Link>
                    <button className="buttons-container__button buttons-container__button__checkout">
                        Checkout
                    </button>
                </div>
            </div></Zoom>

        );
    }
}



const mapStateToProps = ({ cartReducer, currencyReducer }) => ({
    showCart: cartReducer.showCart,
    cartItems: cartReducer.cartItems,
    selectedCurrency: currencyReducer.selectedCurrency,
    selectedCurrencySymbol: currencyReducer.selectedCurrencySymbol,
    totalPrice: cartReducer.cartItems.length > 0 ? cartReducer.cartItems.reduce((accumaltedPrice, cartItem) => (accumaltedPrice + (
        Math.round((cartItem.quantity *
            cartItem.prices.filter((price) => price.currency == currencyReducer.selectedCurrency)[0]['amount']))
    )), 0) : 0,
});
const mapDispatchToProps = (dispatch) => ({
    DecreaseItemQuantity: (itemName) => dispatch(DecreaseItemQuantity(itemName)),
    IncreaseItemQuantity: (itemName) => dispatch(IncreaseItemQuantity(itemName)),
    ToggleCartDropDown: () => dispatch(ToggleCartDropDown()),
});


export default dependecies.connect(mapStateToProps, mapDispatchToProps)(CartDropDown);