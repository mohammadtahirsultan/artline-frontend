import { createReducer } from "@reduxjs/toolkit";

export const priceReducer = createReducer({}, {

    addPriceRequest: (state) => {
        state.loading = true
    },

    addPriceSuccess: (state, action) => {
        state.loading = false
        state.message = action.payload.message
        state.error = null
    },

    addPriceFail: (state, action) => {
        state.loading = false
        state.error = action.payload
    },

    getAllPriceRequest: (state) => {
        state.loading = true
    },

    getAllPriceSuccess: (state, action) => {
        state.loading = false
        state.pricings = action.payload.pricings
        state.error = null
    },

    getAllPriceFail: (state, action) => {
        state.loading = false
        state.error = action.payload
    },


    editPriceRequest: (state) => {
        state.loading = true
    },

    editPriceSuccess: (state, action) => {
        state.loading = false
        state.message = action.payload.message
        state.error = null
    },

    editPriceFail: (state, action) => {
        state.loading = false
        state.error = action.payload
    },

    getPriceRequest: (state) => {
        state.loading = true
    },

    getPriceSuccess: (state, action) => {
        state.loading = false
        state.pricing = action.payload.pricing
        state.error = null
    },

    getPriceFail: (state, action) => {
        state.loading = false
        state.error = action.payload
    },

    clearMessage: (state) => {
        state.message = null
    },
    clearError: (state) => {
        state.error = null
    }

})