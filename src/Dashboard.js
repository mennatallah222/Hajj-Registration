import { Outlet} from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Dashboard(){
    return (<div className="side-bar">
        {/* <h1 className="d-flex-center">Dashboard</h1> */}

        <div className="d-flex side-bar-content">
            <Sidebar/>
        </div>
        
        <div style={{width:"80%", display:"flex", justifyContent:"center"}}>
            <Outlet/>
        </div>

    </div>)
}