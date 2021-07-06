import { AddCartItem } from "./helpers/dependencies"
import { addAttributeSelectionsIndex } from "./helpers/dependencies"
import dependecies from "./helpers/dependencies"

class ProductDisplayPage extends dependecies.React.PureComponent {

    constructor (props) {
        super(props);
        this.state = {
            selectedImageIndex: 0,
            attributeIndex: [],
            attributeSelectionIndex: [],
            showAttributeSelectionAlert: false
        }
    }
    handleAttributeSelection = (newAttributeIndex, newAttributeSelectionIndex) => {


        const { attributeIndex, attributeSelectionIndex } = this.state;

        //attributeIndex and attribute selection index are always corrosponding
        // meaning that selectionIndex[0] is at attribute selectionArray[0] and so on
        if (attributeIndex.indexOf(newAttributeIndex) === -1) {

            attributeIndex.push(newAttributeIndex)
            attributeSelectionIndex.push(newAttributeSelectionIndex)
        }
        else {

            let exisitngIndex = attributeIndex.indexOf(attributeIndex.find((item) => item == newAttributeIndex));

            if (attributeSelectionIndex[exisitngIndex] !== newAttributeSelectionIndex) {

                attributeSelectionIndex[exisitngIndex] = newAttributeSelectionIndex;

            }
            else {
                attributeSelectionIndex[exisitngIndex] = undefined;
            }

        }

        this.setState({
            attributeIndex: attributeIndex,
            attributeSelectionIndex: attributeSelectionIndex
        }, () => console.log(this.state))

    }

    confirmAttributeSelections = (attributes, attributeIndex, attributeSelectionIndex) => {
        let allowAdditon = true

        if (attributeIndex.length == attributes.length) {
            attributeIndex.forEach((item) => item == undefined ? allowAdditon = false : null)
            attributeSelectionIndex.forEach((item) => item == undefined ? allowAdditon = false : null)
        }
        else {
            allowAdditon = false;
        }


        return allowAdditon;

    }

    handleAddToCartAction = (item, attributeIndex, attributeSelectionIndex,) => {
        const { AddCartItem, addAttributeSelectionsIndex } = this.props;
        item.cartId = Math.floor(Math.random() * 10000)

        if (this.confirmAttributeSelections(item.attributes, attributeIndex, attributeSelectionIndex)) {
            
            AddCartItem(item)
            addAttributeSelectionsIndex(item, attributeIndex, attributeSelectionIndex)
        }
        else {
            this.setState({
                showAttributeSelectionAlert: true
            })
            setTimeout(() => {
                this.setState({
                    showAttributeSelectionAlert: false
                })

            }, 2500)
        }


    }

    closeAlertPopUp = () => {
        this.setState({
            showAttributeSelectionAlert: false
        })
    }

    render() {
        const item = { ...this.props.location.state.item };
        const { selectedImageIndex, attributeSelectionIndex, attributeIndex, showAttributeSelectionAlert } = this.state
        const { selectedCurrency, selectedCurrencySymbol, } = this.props;
        const { ItemAttribues, WarningIcon, CloseIcon, Zoom } = dependecies;

        const itemPrice = item.prices.filter((price) => price.currency === selectedCurrency)[0].amount;
        return <div className="productDisplayPage">

            {showAttributeSelectionAlert ? <Zoom><div className="productDisplayPage__alert-box">
                <div className="productDisplayPage__alert-box__closeIcon" onClick={() => this.closeAlertPopUp()} style={{ backgroundImage: `url(${CloseIcon})` }}></div>
                <div className="productDisplayPage__alert-box__warningIcon" style={{ backgroundImage: `url(${WarningIcon})` }}></div>
                <div className="productDisplayPage__alert-box__text">
                    <div className="productDisplayPage__alert-box__text__header">Error</div>
                    <div>Please select all attributes</div>
                </div>
            </div> </Zoom> : null}
            <div className="productDisplayPage__left-side">
                <div className="productDisplayPage__left-side__images-gallery">

                    {item.gallery.map((galleryItem, index) =>
                        <div className="productDisplayPage__left-side__images-gallery__item" key={index} onClick={() => this.setState({ selectedImageIndex: index })} style={{ backgroundImage: `url(${galleryItem})` }}></div>)}
                </div>
                <div className="productDisplayPage__left-side__selected-image-container" style={{ backgroundImage: `url(${item.gallery[selectedImageIndex]})` }}></div>

            </div>
            <div className="productDisplayPage__product__info">

                <div className="productDisplayPage__product__info__name">{item.name}</div>
                <div className="productDisplayPage__product__info__item-attributes__container">

                    {
                        item.attributes.map((attribute, index) => <ItemAttribues key={index} attribute={attribute} attributeIndex={index}
                            attributeSelectionIndex={attributeSelectionIndex[attributeSelectionIndex.length - 1]} toggleButtons={true} item={item} onClickCallBack={this.handleAttributeSelection}></ItemAttribues>)
                    }


                </div>
                <div className="productDisplayPage__product__info__price">
                    <div>Price:</div>
                    <div className="productDisplayPage__product__info__price__amount">{selectedCurrencySymbol}{itemPrice}</div>
                </div>
                <button className="productDisplayPage__product__info__btn" onClick={() => this.handleAddToCartAction(item, attributeIndex, attributeSelectionIndex)}> Add to Cart</button>
                <div className="productDisplayPage__product__info__description" dangerouslySetInnerHTML={{ __html: item.description }}>

                </div>
            </div>

        </div>
    }
}
const mapStatToProps = ({ currencyReducer, cartReducer }) => ({
    selectedCurrency: currencyReducer.selectedCurrency,
    selectedCurrencySymbol: currencyReducer.selectedCurrencySymbol,
    attributeSelectionIndexes: cartReducer.attributeSelectionIndexes
})

const mapDispatchToProps = (dispatch) => ({
    AddCartItem: (cartItem) => (dispatch(AddCartItem(cartItem))),
    addAttributeSelectionsIndex: (item, attributeIndex, attributeSelectionIndex) => (dispatch(addAttributeSelectionsIndex(item, attributeIndex, attributeSelectionIndex))),

})
export default dependecies.connect(mapStatToProps, mapDispatchToProps)(ProductDisplayPage);