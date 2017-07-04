import { handleActions } from 'redux-actions';
import { RaceTypeState } from './initialState';

const raceTypeReducers = handleActions({
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
}, RaceTypeState);


export default raceTypeReducers;