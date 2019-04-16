import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom';//must import this for navigating App
import createBrowserHistory from 'history/createBrowserHistory';//that the application will remember the links used?
import App from './components/App';
import Jokes from './components/Jokes';
import './index.css';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route path='/' component={App} exact/>{/*remember about exact!!!*/}
            <Route patch='/jokes' component={Jokes} />
        </Switch>
    </Router>
    , document.getElementById('root')
);

