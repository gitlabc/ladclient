import 'whatwg-fetch';
import {
    GET_NEXT5_INITIATE,
    GET_NEXT5_SUCCESS,
    GET_NEXT5_FAIL,
} from '../constants/actionTypes';

import {
    showSpinner,
    hideSpinner,
} from './uiActions';

export const getNext5 = () => (
    (dispatch) => {
        dispatch({ type: GET_NEXT5_INITIATE });
        dispatch(showSpinner());
        fetch(`http://localhost:8080/api/v1/next5?meeting=1`)
            .then(response => response.json())
            .then((json) => {
                dispatch({ type: GET_NEXT5_SUCCESS, payload: { data: json } });
                dispatch(hideSpinner());
            })
            .catch(() => dispatch({ type: GET_NEXT5_FAIL }));
    }
);
