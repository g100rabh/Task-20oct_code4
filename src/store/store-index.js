import { configureStore } from "@reduxjs/toolkit";

import storeReducer from './store-slice';

const store = configureStore({
    reducer: { appStore: storeReducer }
});

export default store
