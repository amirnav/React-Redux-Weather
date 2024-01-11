import { RECEIVE_WEATHER_ERROR, RECEIVE_WEATHER_RESPONSE, SEND_WEATHER_REQUEST } from "./weatherType"
import axios from "axios"

const sendWeatherRequest=()=>{
    return {
        type: SEND_WEATHER_REQUEST
    }
}

const receiveWeatherResponse=(data)=>{
    return {
        type: RECEIVE_WEATHER_RESPONSE,
        payload: data
    }
}

const receiveWeatherError=(data)=>{
    return {
        type: RECEIVE_WEATHER_ERROR,
        payload: data
    }
}

const getWeatherInfo = (query)=>{
    return dispatch=>{
        dispatch(sendWeatherRequest());
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=a55d4e603cf10e3c414fc47d734e2231`).then(res=>{
            dispatch(receiveWeatherResponse(res.data))
        }).catch(error=>{
            dispatch(receiveWeatherError(error.message))
        })
    }
}

export default getWeatherInfo

