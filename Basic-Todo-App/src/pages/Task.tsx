import { AddTaskModal } from "@/module/AddTaskModal"
import TaskCard from "@/module/TaskCard"
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
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <div className="flex justify-between items-center">
                <h1>Tasks</h1>
                <AddTaskModal />
            </div>

            <div className="space-y-5 mt-5">
                {tasks.map((task) => (<TaskCard task={task} />))}
            </div>

        </div>
    )
}
