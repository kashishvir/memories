import { combineReducers } from 'redux';
// Reducers are combined into a single root reducer using the combineReducers() function.
import posts from './posts';
 

// here we have only one reducer. i.e. posts
export default combineReducers({
    posts,
});