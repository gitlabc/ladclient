import { handleActions } from 'redux-actions';
import { UiState } from './initialState';

const uiReducers = handleActions({
    SHOW_SPINNER: state => (
        state.set(
            'spinnerVisible',
            true
        )
    ),
    HIDE_SPINNER: state => (
        state.set(
            'spinnerVisible',
            false
        )
    ),
}, UiState);


export default uiReducers;