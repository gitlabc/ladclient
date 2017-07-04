import Immutable from 'immutable';

export const RaceTypeState = Immutable.fromJS({
    Thoroughbred: true,
    Greyhounds: true,
    Harness: true,
});


export const UiState = Immutable.fromJS({
    spinnerVisible: false,
});

export const Next5State = Immutable.fromJS({
    data: {},
});

export const RaceState = Immutable.fromJS({
    data: {},
});
