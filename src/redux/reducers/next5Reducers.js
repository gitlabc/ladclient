import { handleActions } from 'redux-actions';
import { Next5State } from '../constants/models';

export const next5Reducers = handleActions({
    GET_NEXT5_SUCCESS: (state, { payload }) => (
        state.merge({
            data: payload.data,
        })
    )
}, Next5State);