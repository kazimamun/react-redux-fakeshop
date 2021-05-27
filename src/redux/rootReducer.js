import { combineReducers } from "redux";
import { productReducer, selectProductReducer } from "./reducers/productReducer";

const rootReducer = combineReducers({
    products : productReducer,
    product : selectProductReducer
})

export default rootReducer;