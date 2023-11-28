import axios from "axios"
import { server } from "../../store"



export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "loadUserRequest",
        });

        const { data } = await axios.get(`${server}/user/profile`);

        dispatch({
            type: "loadUserSuccess",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "loadUserFail",
            payload: error?.response?.data?.message,
        });
    }
};


export const loginUser = (email, password) => async (dispatch) => {

    try {

        dispatch({
            type: "loginUserRequest"
        })

        const config = {
            headers: {
                "Content-Type": "Application/json"
            }
        }

        const { data } = await axios.post(`${server}/user/login`, { email, password }, config)


        dispatch({
            type: "loginUserSuccess",
            payload: data
        })


    } catch (error) {
        dispatch({
            type: "loginUserFail",
            payload: error.response.data.message
        })
    }
}



