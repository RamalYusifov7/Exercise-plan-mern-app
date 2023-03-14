import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    reps: "",
    load: ""
}
const workoutSlice = createSlice({
    name: "workout",
    initialState,
    reducers: {
        handleChange: (state, { payload }) => {
            const name = payload.name
            const value = payload.value
            state[name] = value
        },
        clearInputs: () => {
            return initialState
        }
    }
})
export const { handleChange,clearInputs } = workoutSlice.actions
export default workoutSlice.reducer