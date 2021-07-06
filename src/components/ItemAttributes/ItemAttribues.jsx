import React from "react";
import "./itemAttribues.scss"

class ItemAttributes extends React.PureComponent {

    constructor (props) {
        super(props);
        this.state = {
            selectedAttributeBtnIndex: null
        }
    }

    handleAttributeUISelection = (index, isItemSelected) => {
        const { onClickCallBack, attributeIndex, item } = this.props;

        console.log(isItemSelected)
        // making sure that the selection state in redux and local state are similar
        if (index != this.state.selectedAttributeBtnIndex && isItemSelected != true) { this.setState({ selectedAttributeBtnIndex: index }) }
        else { this.setState({ selectedAttributeBtnIndex: null }) }

        onClickCallBack(attributeIndex, index, item)
    }

    render() {
        const { attribute, hideAttributeName, toggleButtons, isMini } = this.props;
        const { selectedAttributeBtnIndex } = this.state;

        return <div className={`item-attribute ${isMini ? "mini" : null}`} >

            {hideAttributeName != true ? <div className="item-attribute__name">{attribute.name}:</div> : null}
            <div className="item-attribute__buttons-container">
                {attribute.items.map((item, index) => <button className={`item-attribute__btn ${index == selectedAttributeBtnIndex || item.selected == true ? "active" : null}`} key={index} onClick={() => {
                    if (toggleButtons) {
                        this.handleAttributeUISelection(index, item.selected)
                    }
                }}

                >{item.displayValue}</button>)}
            </div>

        </div>
    }
}
export default ItemAttributes;