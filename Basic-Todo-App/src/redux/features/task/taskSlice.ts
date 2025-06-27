import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

// make a type 

interface InitialState {
    task: ITask[]
}
// this is giving a vibe of schema. 
const initialState: InitialState = {
    task: [
        {
            id: "dskdjsdks",
            title: "Initialize Frontend",
            description: "Create Homepage and Routing",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "High"
        },
        {
            id: "euryeur",
            title: "Create Github Repo",
            description: "Make the proper commits ",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "High"
        }
    ]
}
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export default taskSlice.reducer

