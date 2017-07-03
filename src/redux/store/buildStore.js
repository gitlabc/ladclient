import { createStore, applyMiddleware } from 'redux';
import {use} from 'react-router';
import createLogger from 'redux-logger';
import Immutable from 'immutable';
import reducer from '../reducers';

const initialState = Immutable.Map();

const logger = createLogger({ stateTransformer: state => state.toJS() });

export default function buildStore(preloadedState = initialState) {
    const store = createStore(
        reducer,
        preloadedState,
        applyMiddleware(logger)
    );

    return store;
}
