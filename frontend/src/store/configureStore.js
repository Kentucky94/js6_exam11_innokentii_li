import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {connectRouter, routerMiddleware} from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import {createBrowserHistory} from "history";

import usersReducer from "./reducers/usersReducer";
import {loadFromLocalStorage, localStorageMiddleware} from "./localStorage";
import categoriesReducer from "./reducers/categoriesReducer";
import itemsReducer from "./reducers/itemsReducer";

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  router: connectRouter(history),
  users: usersReducer,
  categories: categoriesReducer,
  items: itemsReducer
});

const middleware = [
  thunkMiddleware,
  routerMiddleware(history),
  localStorageMiddleware
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, enhancers);

export default store;