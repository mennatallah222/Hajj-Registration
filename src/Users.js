import { useEffect, useState } from "react";
import axios from './api/axios';

export default function Users() {

    const [users, setUsers]=useState([]);

    useEffect(() => {
        const token = localStorage.getItem('auth-token');//retrieve the token from localStorage
        axios.get('/all', {
            headers: { 'auth-token': token }
        })
        .then((data)=>setUsers(data.data))
        
    }, []);

    // const res=users.map((u)=><td>{u.name}</td>);

    return (
        <div style={{ padding: "20px" }}>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {users.map((u)=>(
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                            </tr>
                        ))}
                    
                </tbody>
            </table>
        </div>
    );
}
