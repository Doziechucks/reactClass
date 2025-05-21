import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


const url = "http://localhost:8080/api"
export const userAuthApiSlice = createApi({
    reducerPath: 'userAuth',
    batchQuery: fetchBaseQuery({ baseUrl: `${url}` }),
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

export const { useSignUpMutation, useLoginMutation} = userAuthApiSlice;

