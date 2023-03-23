import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rootApi = createApi({
    reducerPath: "user",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3500/api/",
        prepareHeaders: (headers, { getState }) => {
            const token = getState().users?.user?.token;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["User", "Workouts"],
    endpoints: (builder) => ({}),
});
