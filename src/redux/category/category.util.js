export const CategorizeProducts = (data, activeCategory) => {
    let categorizedArrayOfProducts = [];
    let savedCategories = [];
    if (activeCategory != "all") {
        data.forEach((product) => {
            if (savedCategories.indexOf(product.category) === -1) {
                categorizedArrayOfProducts[product.category] = []
                categorizedArrayOfProducts[product.category].push(product)
                savedCategories.push(product.category);
            } else {
                categorizedArrayOfProducts[product.category].push(product)
            }
        })
    } else {
        categorizedArrayOfProducts = data;
    }


    return categorizedArrayOfProducts;
}
export const divideCategories = (products) => {

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    let categories = []

    products.forEach((product) => {
        categories.push(product.category)
    })
    categories.push("all")
    categories = categories.filter(onlyUnique);
    return categories
}