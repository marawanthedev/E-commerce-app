export const addCartItemUtil = (previousItems, newItem) => {

    // I have tried increasing the quanitity of the items with similar attribute selections
    // instead of creating a new item but i have faced ton of errors and lastly when i got solved in a non-optimized way
    // as it was having nested loops that are not good according to BIG O notation and was also causing an unexpected rendering error so i got it removed as i thought it wont be that worth it actually due to the its algo nested loop
    const exisitingItem = previousItems.find(
        (prevItem) => prevItem.cartId === newItem.cartId)

    if (exisitingItem) {

        return previousItems.map((prevItem) => {
            return prevItem.cartId === newItem.cartId ? //   if its already there increase quantity
                {...prevItem, quantity: prevItem.quantity + 1 } : // if item doesnt match id return it as is
                prevItem;
        });
    } else {

        return [...previousItems, {...newItem, quantity: 1 }];
    }
};


export const increaseCartItemQuantityUtil = (previousItems, newItem) => {

    const targetItem = previousItems.find(
        (prevItem) => prevItem.cartId === newItem.cartId)

    if (targetItem) {
        return previousItems.map((prevItem) => {
            return prevItem.cartId === newItem.cartId ? {...prevItem, quantity: prevItem.quantity + 1 } :
                prevItem;
        });
    }
};
export const decreaseCartItemQuantityUtil = (previousItems, newItem) => {
    const targetItem = previousItems.find(
        (prevItem) => prevItem.cartId === newItem.cartId)

    if (targetItem) {

        if (newItem.quantity > 1) {
            return previousItems.map((prevItem) => {
                return prevItem.cartId === newItem.cartId ? {...prevItem, quantity: prevItem.quantity - 1 } :
                    prevItem;
            });
        } else {
            return previousItems.filter((prevItem) => prevItem.cartId !== newItem.cartId);
        }
    }
}

export const removeCartItemUtil = (previousItems, targetItemName) => {
    var updatedCartItems = [];
    previousItems.forEach((prevItem) => {

        if (prevItem.name !== targetItemName) {
            updatedCartItems.push(prevItem);
        }
    });
    return updatedCartItems;

}


export const addAttributeSelections = (cartItems, item, attributeIndexes, attributeSelectionIndexes) => {

    //making it extensible
    cartItems = JSON.parse(JSON.stringify(cartItems))
    const targetItem = JSON.parse(JSON.stringify(cartItems.filter((_item) => _item.cartId === item.cartId)))

    //I have tried finding a way to make in a one loop instead of nested loops
    // to avoid having O(N^2) but unfourtantely i have not found it
    // since that i need to loop through attrb items list to reset unselected attrs to be false


    if (targetItem) {
        targetItem[targetItem.length - 1].attributes.forEach((attribute, outerIndex) => {

          

            if (attributeIndexes.indexOf(outerIndex) !== -1) {
          
                attribute.items.forEach((item, innerIndex) => {

                    if (innerIndex == attributeSelectionIndexes[outerIndex]) {
                        item.selected = true
                    } else {
                        item.selected = false
                    }
                })

            }
        })
    }


    cartItems.filter((item) => item.name == item.name)[cartItems.length - 1].attributes = targetItem[0].attributes

    return cartItems;
}