import { CurrencyActionTypes } from "./currency_types";
const initState = {
    selectedCurrency: "USD",
    selectedCurrencySymbol: "$",
    showCurrencyswitcher: false
}

const currencyReducer = (state = initState, action) => {

    switch (action.type) {

        case CurrencyActionTypes.TOGGLE_SHOW_CURRENCY_SWITCHER:
            {
                return {
                    ...state,
                    showCurrencyswitcher: !state.showCurrencyswitcher
                }
            }

        case CurrencyActionTypes.UPDATE_SELECTED_CURRENCY:
            {
                return {

                    ...state,
                    selectedCurrency:action.newCurrencyInfo.name,
                    selectedCurrencySymbol:action.newCurrencyInfo.symbol

                }
            }
    }
    return state;

}
export default currencyReducer;