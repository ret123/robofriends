import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import {Provider}  from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import './index.css';
import App from './containers/App';
import {searchRobots,requestRobots} from './reducers'
import registerServiceWorker from './registerServiceWorker';


const rootReducer = combineReducers({searchRobots,requestRobots});
const logger = createLogger();
const store = createStore(rootReducer,applyMiddleware(thunk,logger));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
