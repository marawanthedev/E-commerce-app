import React from "react"
import "./Category.scss";
import { AddCartItem, IncreaseItemQuantity, DecreaseItemQuantity, RemoveItem } from "./helpers/dependencies"
import { getProducts } from "./helpers/dependencies"
import dependecies from "./helpers/dependencies"
class CategoryPage extends dependecies.React.PureComponent {



  constructor (props) {
    super(props);
  }

  componentWillMount() {
    this.props.getProducts()
  }

  getProducts = (categorizedProducts, products, activeCategory, selectedCurrencySymbol, selectedCurrency, cartReduxCallBacks, CategoryItem) => {

    if (activeCategory != "all") {

      console.log(categorizedProducts)
      if (categorizedProducts) {
        return categorizedProducts[activeCategory] ? categorizedProducts[activeCategory].map((item, index) =>
          <CategoryItem item={item} key={index} cartReduxCallBacks={cartReduxCallBacks}
            selectedCurrencySymbol={selectedCurrencySymbol}
            selectedCurrency={selectedCurrency}></CategoryItem>
        ) : null

      }


    }
    else {

      return products ? products.map((item, index) =>
        <CategoryItem item={item} key={index} cartReduxCallBacks={cartReduxCallBacks}
          selectedCurrencySymbol={selectedCurrencySymbol}
          selectedCurrency={selectedCurrency} ></CategoryItem>
      ) : null

    }




  }
  render() {
    const { products, selectedCurrency, selectedCurrencySymbol, AddCartItem, IncreaseItemQuantity, DecreaseItemQuantity, RemoveItem, activeCategory, categorizedProducts } = this.props;
    const cartReduxCallBacks = { AddCartItem, IncreaseItemQuantity, DecreaseItemQuantity, RemoveItem }
    const { CategoryItem } = dependecies;
    return (
      <div className="categoryPage" >
        <div className="categoryPage__header">
          {activeCategory}
        </div>
        <div className="categoryPage__items-container">
          {this.getProducts(categorizedProducts, products, activeCategory, selectedCurrencySymbol, selectedCurrency, cartReduxCallBacks, CategoryItem)}
        </div>

      </div>
    )
  }

}

const mapStatToProps = ({ categoryReducer, currencyReducer }) => ({

  products: categoryReducer.products,
  selectedCurrency: currencyReducer.selectedCurrency,
  selectedCurrencySymbol: currencyReducer.selectedCurrencySymbol,
  activeCategory: categoryReducer.activeCategory,
  categorizedProducts: categoryReducer.categorizedProducts
})
const mapDispatchToProps = (dispatch) => ({

  AddCartItem: (cartItem) => (dispatch(AddCartItem(cartItem))),
  IncreaseItemQuantity: () => (dispatch(IncreaseItemQuantity())),
  DecreaseItemQuantity: () => (dispatch(DecreaseItemQuantity())),
  RemoveItem: () => (dispatch(RemoveItem())),
  getProducts: () => (dispatch(getProducts()))
})

export default dependecies.connect(mapStatToProps, mapDispatchToProps)(CategoryPage);