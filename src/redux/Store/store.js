import { applyMiddleware, createStore } from 'redux';
import thunk  from 'redux-thunk';
import rooteReducer from '../Reducer/rootReducer';

const rootStore=createStore(rooteReducer,applyMiddleware(thunk));

export const store=rootStore;