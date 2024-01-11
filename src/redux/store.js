import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import weatherReducer from "./weather/weatherReducer";
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";


// const store=createStore(weatherReducer,composeWithDevTools(applyMiddleware(thunk)))
const store=configureStore(
    {
        reducer:weatherReducer,
    },
    
    

)
export default store;