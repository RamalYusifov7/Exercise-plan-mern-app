import { rootApi } from "../api/apiSlice"



export const userApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (user) => ({
                url: "user/login",
                method: "POST",
                body: user
            }),
            invalidatesTags: ["User"]
        }),
        registerUser: builder.mutation({
            query: (user) => ({
                url: "user/register",
                method: "POST",
                body: user
            }),
            invalidatesTags: ["User"]
        })
    })
})

export const { useRegisterUserMutation, useLoginUserMutation } = userApi