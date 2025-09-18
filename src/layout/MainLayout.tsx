// pages
import Sidebar from "../components/Sidebar"

// react router dom
import { Outlet } from "react-router-dom"


export default function MainLayout() {
    return (
        <div className="flex">
            <Sidebar />
            <Outlet />
        </div>
    )
}