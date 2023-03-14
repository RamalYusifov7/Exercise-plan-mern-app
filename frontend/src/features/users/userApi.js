import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userApi = createApi({
    reducerPath: "user",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500/api/user' }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (user) => ({
                url: "/login",
                method: "POST",
                body: user
            }),
            invalidatesTags: ["User"]
        }),
        registerUser: builder.mutation({
            query: (user) => ({
                url: "/register",
                method: "POST",
                body: user
            }),
            invalidatesTags: ["User"]
        })
    })
})

export const { useRegisterUserMutation, useLoginUserMutation } = userApi