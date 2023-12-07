import axios from "axios";
import { server } from "../../store";


export const addPrice = (packageName, price) => async (dispatch) => {

    try {

        dispatch({
            type: "addPriceRequest"
        })

        const config = {

            headers: { "Content-Type": "application/json" },

        };


        const { data } = await axios.post(
            `${server}/price/add`,
            { packageName, price },
            config
        );

        console.log(data);

        dispatch({
            type: "addPriceSuccess",
            payload: data
        })


    } catch (error) {
        dispatch({
            type: "addPriceFail",
            payload: error.response.data.message
        })
    }
}


export const editPrice = (price, packageName, id) => async (dispatch) => {

    try {

        dispatch({
            type: "editPriceRequest"
        })

        const config = {

            headers: { "Content-Type": "application/json" },

        };


        const { data } = await axios.put(
            `${server}/price/${id}`,
            { price, packageName },
            config
        );


        dispatch({
            type: "editPriceSuccess",
            payload: data
        })


    } catch (error) {
        dispatch({
            type: "editPriceFail",
            payload: error.response.data.message
        })
    }
}


export const getPriceDetails = (id) => async (dispatch) => {

    try {

        dispatch({
            type: "getPriceRequest"
        })

        const config = {

            headers: { "Content-Type": "application/json" },

        };

        const { data } = await axios.get(
            `${server}/price/${id}`,
            config
        );


        dispatch({
            type: "getPriceSuccess",
            payload: data
        })


    } catch (error) {
        dispatch({
            type: "getPriceFail",
            payload: error?.response?.data?.message
        })
    }
}



export const getAllPrices = () => async (dispatch) => {

    try {

        dispatch({
            type: "getAllPriceRequest"
        })

        const config = {
            headers: {
                "Content-Type": "application/json"
            },
        }

        const { data } = await axios.get(`${server}/prices`, config)


        dispatch({
            type: "getAllPriceSuccess",
            payload: data
        })


    } catch (error) {
        dispatch({
            type: "getAllPricesFail",
            payload: error.response.data.message
        })
    }
}

