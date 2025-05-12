import { create, fetchBaseeQuery } from "@reactjs/toolkit/query/react";

const url = "http://localhost:8080/api"
export const userAuthApi = createApi({
    reducerPath: 'userAuth',
    batchQuery: fetchBaseeQuery({ baseUrl: `${url}` }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (data) => ({
                url: "/register/bidder",
                method: "POST",
                header: {
                    "Content-Type": "application/json"
                },
                body: data
            })
        }),
    
        login: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                header: {
                    "Content-Type": "application/json"
                },
                body: data
            })
        })
    })

})
