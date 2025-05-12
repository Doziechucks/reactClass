import { configureStore } from "@reduxjs/toolkit"
import { userAuthApiSlice } from "../service/UserAuthApi.jsx"
import { setUpListener } from "@reduxjs/toolkit/query"

export const store = configureStore({
    reducer: {
        [userAuthApiSlice.reducerPath]: userAuthApiSlice.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        getDefaultMiddleware().concat(userAuthApiSlice.middleware)
    )
})

setUpListener(store.dispatch)