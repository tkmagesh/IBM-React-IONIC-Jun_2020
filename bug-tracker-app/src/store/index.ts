import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers';
import { loggerMiddleware, asyncMiddleware } from './middlewares';

const appStore = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncMiddleware));

export default appStore;