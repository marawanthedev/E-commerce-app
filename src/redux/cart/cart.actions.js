import { CartActionTypes } from "./cart.types";
export const ToggleCartDropDown = () => ({
  type: CartActionTypes.TOGGLE_CART_DROP_DOWN,
  payload: null
});

export const AddCartItem = (
  cartItem,
  attributeIndex,
  attributeSelectionIndex
) => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: cartItem,
  attributeIndex,
  attributeSelectionIndex
});

export const addAttributeSelectionsIndex = (
  item,
  attributeIndex,
  attributeSelectionIndex
) => ({
  type: CartActionTypes.ADD_ATTRIBUTE_SELECTION_INDEX,
  attributeIndex,
  item,
  attributeSelectionIndex
});

export const IncreaseItemQuantity = item => ({
  type: CartActionTypes.INCREASE_ITEM_QUANTITY,
  payload: item
});

export const DecreaseItemQuantity = item => ({
  type: CartActionTypes.DECREASE_ITEM_QUANTITY,
  payload: item
});

export const RemoveItem = itemName => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: itemName
});
