import { CartActionTypes } from "./cart.types";
import { addCartItemUtil, decreaseCartItemQuantityUtil, increaseCartItemQuantityUtil, removeCartItemUtil, addAttributeSelections, } from "./cart.utils";

const INITIAL_STATE = {
    showCart: false,
    cartItems: [],

};
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_DROP_DOWN:
            return {
                ...state,
                showCart: !state.showCart,
            };

        case CartActionTypes.ADD_CART_ITEM:
            {
                return {
                    ...state,

                    cartItems: addCartItemUtil(state.cartItems, action.payload),
                };
            }
        case CartActionTypes.INCREASE_ITEM_QUANTITY:
            {
                return {
                    ...state,
                    cartItems: increaseCartItemQuantityUtil(
                        state.cartItems,
                        action.payload
                    ),
                };
            }
        case CartActionTypes.ADD_ATTRIBUTE_SELECTION_INDEX:
            {
                return {

                    ...state,
                    cartItems: addAttributeSelections(state.cartItems, action.item, action.attributeIndex,
                        action.attributeSelectionIndex),

                }
            }

        case CartActionTypes.DECREASE_ITEM_QUANTITY:
            {
                return {
                    ...state,
                    cartItems: decreaseCartItemQuantityUtil(
                        state.cartItems,
                        action.payload,
                    )
                };
            }
        case CartActionTypes.REMOVE_ITEM:
            {

                return {

                    ...state,
                    cartItems: removeCartItemUtil(state.cartItems, action.payload)
                }
            }

        default:
            return state;
    }
};

export default cartReducer;