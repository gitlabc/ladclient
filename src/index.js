import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import Main from './components/Main';
import configureStore from './redux/store';

import Next5PageContainer from './components/Next5Page';
// import RacePageContainer from './components/RacePage';

import { getNext5Races } from './redux/actions';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Next5PageContainer} />
                {/*<Route path="/result" component={RacePageContainer} />*/}
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getNext5Races()).then(() =>
    console.log(store.getState())
);
