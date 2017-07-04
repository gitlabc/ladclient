import {
    CHANGE_RACE_TYPE,
    SHOW_SPINNER,
    HIDE_SPINNER,
} from '../constants/actionTypes';

export const changeRaceType = (raceType) => (
    {
        type: CHANGE_RACE_TYPE,
        payload: raceType,
    });
