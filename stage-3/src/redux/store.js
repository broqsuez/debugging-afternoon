import reducer from './reducer';
import {  applyMiddleware } from 'redux';
import { reduxPromiseMiddleware } from 'redux-promise-middleware';
import { createStore } from 'redux';

export default createStore(reducer, applyMiddleware( reduxPromiseMiddleware())
);