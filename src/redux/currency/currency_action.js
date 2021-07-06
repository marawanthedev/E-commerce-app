import { CurrencyActionTypes } from "./currency_types"

export const toggleShowCurrencySwitcher = () => ({
    type: CurrencyActionTypes.TOGGLE_SHOW_CURRENCY_SWITCHER,
    payload: null

})
export const updateSelectedCurrency = (newCurrencyInfo) => ({
   
    type: CurrencyActionTypes.UPDATE_SELECTED_CURRENCY,
    newCurrencyInfo
})