
import dependecies from "./helpers/dependcies"

class CartPageItemGallery extends dependecies.React.PureComponent {

    constructor (props) {

        super(props);
        this.state = {
            imageSelectionIndex: 0
        }
    }
    nextImage = (gallery, imageSelectionIndex) => {


        if (imageSelectionIndex < gallery.length - 1) {
            this.setState({
                imageSelectionIndex: imageSelectionIndex + 1
            })
        }
        else {
            this.setState({
                imageSelectionIndex: 0
            })
        }
    }
    prevImage = (gallery, imageSelectionIndex) => {
        if (imageSelectionIndex > 0) {
            this.setState({
                imageSelectionIndex: imageSelectionIndex - 1
            })
        }
        else {
            this.setState({
                imageSelectionIndex: gallery.length - 1
            })
        }
    }

    render() {
        const { gallery } = this.props;
        const { imageSelectionIndex } = this.state;
        const { LightChevron } = dependecies;
        // NOTE the reason that i added backgorund color to the arrow icons 
        // is that some images are white and user wont be able to see the arrows
        return <div className="cart__item__gallery" style={{ backgroundImage: `url(${gallery[imageSelectionIndex]})` }}>

            {
                gallery.length > 1 ? <div> <div className="cart__item__gallery__prev" onClick={() => this.prevImage(gallery, imageSelectionIndex)}>
                    <img src={LightChevron} alt="" />
                </div>
                    <div className="cart__item__gallery__next" onClick={() => this.nextImage(gallery, imageSelectionIndex)}>
                        <img src={LightChevron} alt="" />

                    </div></div> : null
            }

        </div>
    }

}
export default CartPageItemGallery;