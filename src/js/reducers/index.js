import {combineReducers} from "redux";
import {exempleReducer} from "./exemple";

// Combining the reducers to be imported in the store
const Reducer = combineReducers({
    "exemple": exempleReducer
});

export default Reducer;