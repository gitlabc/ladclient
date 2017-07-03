import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import createBrowserHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { fromJS } from 'immutable';
import configureStore from './store/configureStore';

import Next5PageContainer from './containers/Next5PageContainer';
import RacePageContainer from './containers/RacePageContainer';

const initialState = fromJS({
    events: [],
    competitors: [],
    races:[],
    eventId: 0
});

const history = createBrowserHistory();
const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path='/' component={Next5PageContainer} />
                <Route path="/race" component={RacePageContainer} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);


