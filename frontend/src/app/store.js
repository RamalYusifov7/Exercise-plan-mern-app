import { configureStore } from "@reduxjs/toolkit";
import WorkoutReducer from "../features/workouts/workoutSlice"
import userReducer from "../features/users/userSlice"
import { rootApi } from "../features/api/apiSlice";

export const store = configureStore({
    reducer: {
        users: userReducer,
        workouts: WorkoutReducer,
        [rootApi.reducerPath]: rootApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rootApi.middleware),
})
