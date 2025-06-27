import Logo from "@/assets/Logo";
import { Link } from "react-router";

export default function Navbar() {
    return (
        <div>
            <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
                <div className="flex items-center">
                    <Logo /> <span className="font-bold ml-2">Task</span> Master
                </div>
                <Link to="/users">Users</Link>
                <Link to="/tasks">Tasks</Link>
            </nav>

        </div>
    )
}
