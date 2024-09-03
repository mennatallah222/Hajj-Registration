import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from './api/axios';

export default function Users() {

    const [users, setUsers]=useState([]);

    useEffect(() => {
        const token = localStorage.getItem('auth-token');//retrieve the token from localStorage
        axios.get('/user/all', {
            headers: { 'auth-token': token }
        })
        .then((data)=>setUsers(data.data))
        
    }, []);

    

    function deleteUser(id){
        const token = localStorage.getItem('auth-token');//retrieve the token from localStorage
        axios.delete(`/user/delete/${id}`, {
            headers: { 'auth-token': token }
        })
        .then(()=>{
            //updating the state by filtering out the deleted user
            setUsers(users.filter(u=>u.id!==id));
        })
    }


    return (
        <div style={{ padding: "20px" }}>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {users.map((u)=>(
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td className="icons">
                                <i className="fa-solid fa-trash" style={{color:"red"}} onClick={()=>deleteUser(u.id)}></i>
                                <Link to={`${u.id}`}>
                                    <i className="fa-solid fa-pen-to-square" style={{color:"blue"}}></i>
                                </Link>
                                </td>
                            </tr>
                        ))}
                    
                </tbody>
            </table>
        </div>
    );
}
