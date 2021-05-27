import { ActionTypes } from "../contains/action-types";

const init = {
    products : [ ]
}

export const productReducer = (state = init, action) => {
    switch(action.type){
        case ActionTypes.SET_PRODUCTS :
            return {...state, products: action.payload}
        default :
            return state
    }
}

export const selectProductReducer = (state = {}, {type, payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCT :
            return {...state, ...payload}
        default :
            return state
    }
}