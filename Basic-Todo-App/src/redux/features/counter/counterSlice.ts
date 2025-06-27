import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    count: 0
}
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // through state we will get the initial state value
        increment: (state, action) => {
            console.log(action)
            // state.count = state.count + action.payload.amount
            state.count = state.count + action.payload
        },
        decrement: (state) => {
            state.count = state.count - 1
        }
    }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer;