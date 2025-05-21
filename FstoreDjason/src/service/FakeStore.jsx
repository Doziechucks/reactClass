import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/react"

const fakeStoreUrl = 'https://fakestoreapi.com/products.com/products'

export const fakeStoreApi = createApi({
    reducerPath: `fakeStoreApi`,
    fetchBaseQuery: fetchBaseQuery({
        getProducts: buildder({
            query:() => '/products'
        })
    })
})

export const { useGetProdductQuery } = fakeStoreUrl