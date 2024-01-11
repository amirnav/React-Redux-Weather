import axios from "axios"
import { RECIEVE_WEATHER_ERROR, RECIEVE_WEATHER_RESPONSE, SEND_WEATHER_REQUEST } from "./weatherType"

const sendWeatherRequest=()=>{
    return{
        type:SEND_WEATHER_REQUEST
    }
}
const recieveWeatherResponse=(data)=>{
    return{
        type:RECIEVE_WEATHER_RESPONSE,
        payload:data
    }
}
const recieveWeatherError=(data)=>{
    return{
        type:RECIEVE_WEATHER_ERROR,
        payload:data
    }
}
const getWeatherInfo=(query)=>{
    return dispatch=>{
        dispatch(sendWeatherRequest());
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=a55d4e603cf10e3c414fc47d734e2231`)
        .then(res=>{
            dispatch(recieveWeatherResponse(res.data))
        }).catch(error=>{
            dispatch(recieveWeatherError(error.message))
        })
    }
}
export default getWeatherInfo;