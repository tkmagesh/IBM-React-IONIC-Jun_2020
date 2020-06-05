import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers'

function loggerMiddleware(store : any){
    return function(next : any){
        return function(action : any){
            console.log(action);
            next(action);
        }
    }
}

export default createStore(rootReducer, applyMiddleware(loggerMiddleware));