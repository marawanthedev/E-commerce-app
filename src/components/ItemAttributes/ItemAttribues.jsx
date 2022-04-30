import React from "react";
import "./itemAttribues.scss";

class ItemAttributes extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedAttributeBtnIndex: null,
    };
  }

  handleAttributeUISelection = (index, isItemSelected) => {
    const { onClickCallBack, attributeIndex, item } = this.props;

    // making sure that the selection state in redux and local state are similar

    if (
      index !== this.state.selectedAttributeBtnIndex &&
      isItemSelected !== true
    ) {
      this.setState({ selectedAttributeBtnIndex: index });
    } else {
      this.setState({ selectedAttributeBtnIndex: null });
    }

    onClickCallBack(attributeIndex, index, item);
  };

  handleAttributesModeBehavior = (attribute) => {
    const { isViewMode, toggleButtons } = this.props;
    const { selectedAttributeBtnIndex } = this.state;

    return attribute.items.map((item, index) => {
      if (isViewMode === true) {
        if (item.selected) {
          return (
            <button
              className="item-attribute__btn active"
              key={index}
              onClick={() => {
                if (toggleButtons) {
                  this.handleAttributeUISelection(index, item.selected);
                }
              }}
            >
              {item.displayValue}
            </button>
          );
        } else {
          return null;
        }
      } else {
        return (
          <button
            className={`item-attribute__btn ${
              index === selectedAttributeBtnIndex || item.selected === true
                ? "active"
                : null
            }`}
            key={index}
            onClick={() => {
              if (toggleButtons) {
                this.handleAttributeUISelection(index, item.selected);
              }
            }}
          >
            {item.displayValue}
          </button>
        );
      }
    });
  };

  render() {
    const { attribute, hideAttributeName, isMini } = this.props;

    return (
      <div className={`item-attribute ${isMini ? "mini" : null}`}>
        {hideAttributeName !== true ? (
          <div className="item-attribute__name">{attribute.name}:</div>
        ) : null}
        <div className="item-attribute__buttons-container">
          {this.handleAttributesModeBehavior(attribute)}
        </div>
      </div>
    );
  }
}
export default ItemAttributes;
