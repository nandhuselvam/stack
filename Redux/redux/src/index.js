// src/reducers/index.js

import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    // Add more reducers if necessary
});

export default rootReducer;
