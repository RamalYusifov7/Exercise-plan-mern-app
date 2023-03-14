import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./users/userApi";
import { workoutApi } from "./workouts/workoutApi";
import WorkoutReducer from "./workouts/workoutSlice"
import userReducer from "./users/userSlice"
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        users: userReducer,
        [workoutApi.reducerPath]: workoutApi.reducer,
        workouts: WorkoutReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        userApi.middleware,
        workoutApi.middleware,
    ],
    devTools: true
})

setupListeners(store.dispatch)
