import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import weatherReducer from "./weather/weatherReducer";
import { thunk } from "redux-thunk";


const store=createStore(weatherReducer,composeWithDevTools(applyMiddleware(thunk)))
export default store;