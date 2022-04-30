export const addCartItemUtil = (previousItems, newItem) => {
  const exisitingItem = previousItems.find(
    prevItem => prevItem.cartId === newItem.cartId
  );
  if (exisitingItem) {
    return previousItems.map((prevItem, index) => {
      return prevItem.cartId === newItem.cartId
        ? { ...prevItem, quantity: prevItem.quantity + 1 }
        : prevItem;
    });
  } else {
    return [...previousItems, { ...newItem, quantity: 1 }];
  }
};

export const increaseCartItemQuantityUtil = (previousItems, newItem) => {
  const targetItem = previousItems.find(
    prevItem => prevItem.cartId === newItem.cartId
  );

  if (targetItem) {
    return previousItems.map(prevItem => {
      return prevItem.cartId === newItem.cartId
        ? { ...prevItem, quantity: prevItem.quantity + 1 }
        : prevItem;
    });
  }
};
export const decreaseCartItemQuantityUtil = (previousItems, newItem) => {
  const targetItem = previousItems.find(
    prevItem => prevItem.cartId === newItem.cartId
  );

  if (targetItem) {
    if (newItem.quantity > 1) {
      return previousItems.map(prevItem => {
        return prevItem.cartId === newItem.cartId
          ? { ...prevItem, quantity: prevItem.quantity - 1 }
          : prevItem;
      });
    } else {
      return previousItems.filter(
        prevItem => prevItem.cartId !== newItem.cartId
      );
    }
  }
};

export const removeCartItemUtil = (previousItems, targetItemName) => {
  var updatedCartItems = [];
  previousItems.forEach(prevItem => {
    if (prevItem.name !== targetItemName) {
      updatedCartItems.push(prevItem);
    }
  });
  return updatedCartItems;
};

export const omitAttributeDuplications = (
  cartItems,
  targetItem,
  targetItemIndex
) => {
  let duplicationInfo = {
    status: false,
    index: null
  };
  cartItems.forEach((cartItem, index) => {
    if (cartItem.name === targetItem.name) {
      if (
        JSON.stringify(cartItem.attributes) ===
        JSON.stringify(targetItem.attributes)
      ) {
        duplicationInfo.status = true;
        duplicationInfo.index = index;
      }
    }
  });

  if (duplicationInfo.status === false) {
    if (cartItems[cartItems.length - 1].attributes) {

      if (cartItems.lastIndexOf(targetItem.name) !== -1) {
        cartItems[cartItems.lastIndexOf(targetItem.name)].attributes = targetItem.attributes;
      }
      else {
        cartItems[cartItems.length - 1].attributes = targetItem.attributes;
      }

    }
  } else {
    cartItems[duplicationInfo.index].quantity =
      cartItems[duplicationInfo.index].quantity + 1;
    cartItems.splice(targetItemIndex, 1);
  }

  return cartItems;
};

export const addAttributeSelections = (
  cartItems,
  item,
  attributeIndexes,
  attributeSelectionIndexes
) => {
  cartItems = JSON.parse(JSON.stringify(cartItems));

  let targetItemIndex;
  const targetItem = JSON.parse(
    JSON.stringify(
      cartItems.find((_item, index) => {
        if (_item.cartId === item.cartId) {
          targetItemIndex = index;
          return _item;
        }
        else {
          return null
        }
      })
    )
  );

  if (targetItem) {
    targetItem.attributes.forEach((attribute, outerIndex) => {
      if (attributeIndexes.indexOf(outerIndex) !== -1) {
        attribute.items.forEach((item, innerIndex) => {
          if (innerIndex === attributeSelectionIndexes[outerIndex]) {
            item.selected = true;
          } else {
            item.selected = false;
          }
        });
      }
    });
  }
  cartItems = omitAttributeDuplications(cartItems, targetItem, targetItemIndex);

  return cartItems;
};
