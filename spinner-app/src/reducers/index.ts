import { combineReducers } from 'redux';
import spinnerReducer from '../components/Spinner/reducers';

const rootReducer = combineReducers({
    spinnerState: spinnerReducer
});

export default rootReducer;