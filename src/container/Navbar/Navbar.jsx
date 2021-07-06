
import CurrencySwitcher from "../../components/CurrencySwitcher/CurrencySwitcher"
import { toggleShowCurrencySwitcher, updateSelectedCurrency } from "../../redux/currency/currency_action"
import { ToggleCartDropDown } from "../../redux/cart/cart.actions";
import { getProducts, updateCategory } from "../../redux/category/category_action"
import dependecies from "./helpers/dependencies"

class Navbar extends dependecies.React.PureComponent {

    constructor (props) {
        super(props);
        this.state = {}
    }

    handleNewCurrencySelection = (newCurrencyInfo) => {
        this.props.updateSelectedCurrency(newCurrencyInfo)
    }
    manageCurrencySwitcher = (currencies) => {
        return this.props.showCurrencyswitcher ? <CurrencySwitcher currencies={currencies}
            currencySelectionUpdateCallBack={this.handleNewCurrencySelection}></CurrencySwitcher> : null
    }
    componentWillMount() {
        this.props.getProducts()
    }
    render() {
        const { React, Logo, USD, JPY, GBP, ChevronIcon, Zoom, Bounce, CartIcon, CartDropDown } = dependecies
        const { products } = this.props;

        if (products) {
            products.forEach((product) => product)
        }

        const currencies = [
            {
                icon: USD,
                text: "USD",
                symbol: "$"

            },
            {
                icon: JPY,
                text: "JPY",
                symbol: "¥"
            },
            {
                icon: GBP
                , text: "GBP",
                symbol: "£"
            }
        ];
        const currentCurrency = currencies.filter((currency) => currency.text == this.props.selectedCurrency)[0];
        const { showCurrencyswitcher, toggleShowCurrencySwitcher, showCart, ToggleCartDropDown, itemCount, categories, updateCategory, activeCategory } = this.props;
        const { Link } = dependecies
        return (

            <div className="navbar">


                <Zoom right cascade>
                    <div className="navbar__section navbar__section__left">
                        {/* border-bottom: 2px solid rgba(94, 206, 123, 1); */}

                        {categories ? categories.map((category, index) =>
                            <Link to="/" key={index} style={{ textDecoration: "none", color: "black", }}>
                                <div onClick={() => updateCategory(category)} className={`navbar__item navbar__section__left__item ${activeCategory == category ? "active" : null}`}>{category}</div></Link>) : null}

                    </div>
                </Zoom>

                <Bounce up >
                    <div className="navbar__section navbar__section__middle">
                        <Link to="/">
                            <div className="navbar__item navbar__middle-section__logo-container"> <img src={Logo} alt="" className="navbar__middle__logo__img" /> </div>
                        </Link>
                    </div>
                </Bounce>
                <div className="navbar__section navbar__section__right">

                    {
                        this.manageCurrencySwitcher(currencies)
                    }
                    {/* onClick={() => {if( showCurrencyswitcher==true){toggleShowCurrencySwitcher()}}} */}
                    {showCart ? <div>
                        <div className="cart-overlay" onClick={() => ToggleCartDropDown()}></div>
                        <CartDropDown itemCount={itemCount}></CartDropDown>
                    </div> : null}


                    <div className="navbar__item navbar__section__right__item">

                        {showCurrencyswitcher ? <div className="currency-overlay" onClick={() => toggleShowCurrencySwitcher()}></div> : null}

                        <img src={currentCurrency.icon} alt="" className="navbar__icon navbar__icon__currencys" />
                        <img src={ChevronIcon} alt=""

                            className={`navbar__icon 
                          navbar__icon__small navbar__icon__chevron ${showCurrencyswitcher ? "navbar__icon__chevron__rotate" : null}`} onClick={() => toggleShowCurrencySwitcher()} />
                    </div>
                    <div className="navbar__item navbar__section__right__item">


                        < CartIcon itemCount={itemCount} ToggleCartDropDown={ToggleCartDropDown}></CartIcon>

                    </div>

                </div>

            </div>
        )
    }
}
const mapStateToProps = ({ currencyReducer, cartReducer, categoryReducer }) => ({
    selectedCurrency: currencyReducer.selectedCurrency,
    showCurrencyswitcher: currencyReducer.showCurrencyswitcher,
    showCart: cartReducer.showCart,
    itemCount: cartReducer.cartItems.length > 0 ? cartReducer.cartItems.reduce((accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity, 0) : 0,
    products: categoryReducer.products,
    categories: categoryReducer.categories,
    activeCategory: categoryReducer.activeCategory,

})
const mapDispatchToProps = (dispatch) => ({
    toggleShowCurrencySwitcher: () => dispatch(toggleShowCurrencySwitcher()),
    updateSelectedCurrency: (newCurrencySelection) => dispatch(updateSelectedCurrency(newCurrencySelection)),
    ToggleCartDropDown: () => dispatch(ToggleCartDropDown()),
    getProducts: () => (dispatch(getProducts())),
    updateCategory: (category) => (dispatch(updateCategory(category)))

})
export default dependecies.connect(mapStateToProps, mapDispatchToProps)(Navbar);