import { handleActions } from 'redux-actions';
import { Next5State } from './initialState';

const next5Reducers = handleActions({
    RECEIVE_NEXT5: (state, { payload }) => (
        state.merge({
            data: payload.data,
        })
    )
}, Next5State);

export default next5Reducers;