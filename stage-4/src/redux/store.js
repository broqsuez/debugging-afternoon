import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import reducer from './reducer';
import  reduxPromiseMiddleware  from 'redux-promise-middleware';


export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));