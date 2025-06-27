import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice"
import { useAppSelector } from "@/redux/hooks"

export default function Task() {
    // const tasks = useAppSelector((state) => state.todo.tasks)

    // we can do this more efficient way by grabbing the tasks inside task slice

    const tasks = useAppSelector(selectTasks)
    const filter = useAppSelector(selectFilter)

    console.log(tasks)
    console.log(filter)


    return (
        <div>
            <h1>This is Task Component</h1>
        </div>
    )
}
