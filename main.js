import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './my-react-app/src/App';
import store from './my-react-app/src/store';
import './styles.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
