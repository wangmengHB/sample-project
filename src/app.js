
import './test.scss';
import TEST from './component/images/path1/btn_Shutdown_highlight.png';

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './redux/container.jsx';
import todoApp from './redux/reducer.js';

let store = createStore(todoApp)

let rootElement = document.getElementById('niswebui-app-container');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)