import { combineReducers } from 'redux-immutable';
import uiReducers from './uiReducers';
import next5Reducers from './next5Reducers';

const rootReducer = combineReducers({
    ui: uiReducers,
    next5: next5Reducers
});

export default rootReducer;
