import { createSlice } from "@reduxjs/toolkit";

const localUser = localStorage.getItem("user")

const initialState = {
    user: localUser ? JSON.parse(localUser) : null
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, { payload }) => {
            state.user = payload
            localStorage.setItem("user", JSON.stringify(payload))
        },
        removeUser: (state) => {
            state.user = null
            localStorage.removeItem("user")
        },
    }
})
export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer