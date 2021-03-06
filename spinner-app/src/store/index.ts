import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers'

function loggerMiddleware(store : any){
    return function(next : any){
        return function(action : any){
            console.group(action.type);
            console.group('Before')
            console.log(store.getState())
            console.groupEnd();
            console.log(action);
            next(action);
            console.group('After');
            console.log(store.getState())
            console.groupEnd();
            console.groupEnd();
        }
    }
}

export default createStore(rootReducer, applyMiddleware(loggerMiddleware));