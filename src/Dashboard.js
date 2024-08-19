import { Outlet, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Users from "./Users";

export default function Dashboard(){
    return (<div className="side-bar">
        {/* <h1 className="d-flex-center">Dashboard</h1> */}

        <div className="d-flex side-bar-content">
            <Sidebar/>
        </div>
        
        <div style={{width:"80%"}}>
            <Outlet/>
        </div>

    </div>)
}