import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from './api/axios';

export default function Packages() {
    const [packages, setPackages]=useState([]);

    useEffect(()=>{
        axios.get('/cards')
            .then((data)=>setPackages(data.data));
    }, []);

    return <>

            

            <div style={{padding:"20px", display:"flex", flexDirection:"column", justifyContent:"center"}}>
                <Link to="add-package" style={{marginBottom:"20px", cursor:"pointer"}}>Add Package</Link>

                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>img</td>
                            <td>span</td>
                            <td>p</td>
                            <td>price</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            packages.map((p)=>(
                                <tr key={p.index}>
                                    <td>{p.img}</td>
                                    <td>{p.span}</td>
                                    <td>{p.p}</td>
                                    <td>{p.price}</td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </>
}