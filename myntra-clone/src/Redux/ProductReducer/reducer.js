import { PRODUCT_FAILURE, PRODUCT_REQ, PRODUCT_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading : false,
    isError : false,
    men : [],
    women : [],
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type){

        case PRODUCT_REQ : {
            return {
                ...state,
                isLoading : true
            }
        }

        case PRODUCT_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                men : payload
            }
        }

        case PRODUCT_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }

        default : {
            return state;
        }
    }
}