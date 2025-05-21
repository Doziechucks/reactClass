import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/react"

const dummyJasonUrl = 'https://dummyjson.com'

export const dummyJasonApi = createApi({
    reducerPath: `dummyJasonApi`,
    fetchBaseQuery: fetchBaseQuery({
        getProducts: buildder({
            query:() => '/products'
        })
    })
})

export const { useGetProdductQuery } = dummyJasonUrl