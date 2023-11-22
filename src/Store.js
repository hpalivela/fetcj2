import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk'
import { completeData } from './BlogReducer';

const rootReducer=combineReducers({completePosts:completeData})
export const store=createStore(rootReducer,applyMiddleware(thunk));