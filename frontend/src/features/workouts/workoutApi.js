import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const workoutApi = createApi({
    reducerPath: "workout",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500/api' }),
    tagTypes: ["Workout"],
    endpoints: (builder) => ({
        getWorkouts: builder.query({
            query: () => "/workouts",
            providesTags: ["Workout"]
        }),
        addWorkout: builder.mutation({
            query: (workout) => ({
                url: "/workouts",
                method: "POST",
                body: workout
            }),
            invalidatesTags: ["Workout"]
        }),
        deleteWorkout: builder.mutation({
            query: (id) => ({
                url: `/workouts/${id}`,
                method: "DELETE",
                body: id
            }),
            invalidatesTags: ["Workout"]
        }),
    })
})

export const { useGetWorkoutsQuery, useAddWorkoutMutation, useDeleteWorkoutMutation } = workoutApi