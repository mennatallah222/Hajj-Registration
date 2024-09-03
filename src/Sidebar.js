import { Link } from "react-router-dom";

export default function Sidebar(){
    return <div style={{display:"flex", flexDirection:"column"}}>
        <Link to="/dashboard/users">Users</Link>
        <Link to="/dashboard/packages">Packages</Link>
    </div>
}