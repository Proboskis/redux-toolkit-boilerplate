import { configureStore } from '@reduxjs/toolkit';
import fakeReducer from './fakeReducer';

// fake reducer will be replaced when the real reducers are created
const store = configureStore({
    reducer: { fakeReducer },
});

export default store;