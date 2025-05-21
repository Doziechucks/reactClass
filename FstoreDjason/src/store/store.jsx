import { configureStore } from "@reduxjs/toolkit";
import { dummyJasonApi } from "../service/DummyJason";
import { fakeStoreApi } from "../service/FakeStore";

export const store = configureStore({
    reducer: {
        [dummyJasonApi.reducerPath]: dummyJasonApi.reducer,
        [fakeStoreApi.reducerPath]: fakeStoreApi.reducer
    },


})