// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers/store';
import NewsFeed from './components/Newsfeed';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={NewsFeed} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
