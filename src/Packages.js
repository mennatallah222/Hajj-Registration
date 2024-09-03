import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from './api/axios';

export default function Packages() {
    const [packages, setPackages]=useState([]);

    useEffect(()=>{
        axios.get('/cards')
            .then((data)=>setPackages(data.data));
    }, []);


    function deletePackage(id){
        axios.delete(`/cards/${id}`, {
        })
        .then(()=>{
            //updating the state by filtering out the deleted user
            setPackages(packages.filter(p=>p.id!==id));
        })
    }

    return <>

            

            <div style={{padding:"20px", display:"flex", flexDirection:"column", justifyContent:"center"}}>
                <Link to="add-package" style={{marginBottom:"20px", cursor:"pointer"}}>Add Package</Link>

                <table>
                    <thead>
                        <tr>
                            <td>img</td>
                            <td>span</td>
                            <td>p</td>
                            <td>price</td>
                            <td></td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            packages.map((p)=>(
                                <tr key={p.index}>
                                    <td>
                                        <img src={`http://localhost:5000/uploads/${p.img}`} alt={p.span} style={{ width: '100px', height: 'auto' }} />
                                    </td>
                                    <td>{p.span}</td>
                                    <td>{p.p}</td>
                                    <td>{p.price}</td>
                                    <td className="icons">
                                    <i className="fa-solid fa-trash" style={{color:"red"}} onClick={()=>deletePackage(p.id)}></i>
                                        <Link to={`${p._id}`}>
                                            <i className="fa-solid fa-pen-to-square" style={{color:"blue"}}></i>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </>
}