import App from "@/App";
import Task from "@/pages/Task";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        // element: <div>Hello World</div>,
        Component: App,
        children: [
            {
                index: true,
                Component: Task,
            },
            {
                path: "tasks",
                Component: Task,
            },
            {
                path: "users",
                Component: User,
            },

        ]
    },
]);

export default router