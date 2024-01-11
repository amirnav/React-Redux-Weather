import React from 'react';
import Weather from './Weather';
import store from '../redux/store';
import { Provider } from "react-redux"

const App = ()=>{
    return (
        <Provider store={store}>            
            <div>
                <Weather/>
            </div>       
        </Provider>
    ) 
}
export default App;
