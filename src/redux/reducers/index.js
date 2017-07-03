import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';

import uiReducers from './uiReducers';
import next5Reducers from './next5Reducers';

const reducer = combineReducers({
    ui: uiReducers,
    next: next5Reducers,
    reouter: routerReducer,
});

export default reducer;
