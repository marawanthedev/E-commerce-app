import dependecies from "./helpers/dependecies";


class CartIcon extends dependecies.React.PureComponent {

    constructor (props) {

        super(props);
        
    }

    render() {


        const { ToggleCartDropDown, itemCount } = this.props;
        const { ShoppingIcon, React } = dependecies;

        return (
            <div className={`cart-icon`} onClick={() => ToggleCartDropDown()}>
                <ShoppingIcon className="shopping-icon"></ShoppingIcon>
                {
                    itemCount !== 0 ? <div className="item-count-circle">
                        <span className="item-count ">{itemCount}</span>
                    </div> : null
                }
            </div>
        )
    }

}


export default CartIcon



