import { rootApi } from '../api/apiSlice'

export const workoutApi = rootApi.injectEndpoints({
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
                url: `workouts/${id}`,
                method: "DELETE",
                body: id
            }),
            invalidatesTags: ["Workout"]
        }),
    })
})

export const { useGetWorkoutsQuery, useAddWorkoutMutation, useDeleteWorkoutMutation } = workoutApi