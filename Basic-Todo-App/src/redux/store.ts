import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/counter/counterSlice"
import logger from './middlewares/logger'
export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    // here logger is our own made middleware and we concat with redux default middlewares. 
})

export type RootState = ReturnType<typeof store.getState>
// a TypeScript type utility for defining the overall shape of your Redux store's state.
// store.getState(); returns  { counter: { count: 5 }, user: { name: "Sazid" } }

export type AppDispatch = typeof store.dispatch
//it's used to get the correct type of the Redux dispatch function from your configured store.