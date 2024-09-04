import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from './api/axios';
import Notification from './Notification'
import Modal from "./Modal";

export default function Packages() {
    const [packages, setPackages]=useState([]);
    const [modal, setModal]=useState(false);
    const [packageToDelete, setPackageToDelete]=useState(null);
    const [notification, setNotification]=useState(null);

    useEffect(()=>{
        axios.get('/cards')
            .then((data)=>setPackages(data.data));
    }, []);


    function deletePackage(id){
        console.log("id: "+id);
        axios.delete(`/cards/delete/${id}`, {
        })
        .then(()=>{
            setPackages(packages.filter(p=>p._id!==id));
            setModal(false);
            setNotification("Package deleted successfully!");
        })
    }

    const handleDelete=(id)=>{
        setPackageToDelete(id);
        setModal(true);
    }

    const handleCancel=()=>{
        setPackageToDelete(null);
        setModal(false);
    }

    return <>

            <div style={{padding:"20px", display:"flex", flexDirection:"column"}}>
                <Link to="add-package" style={{marginBottom:"20px", cursor:"pointer"}}>Add Package</Link>

                <table>
                    <thead>
                        <tr>
                            <td>Image</td>
                            <td>Name</td>
                            <td>Type</td>
                            <td>Price</td>
                            <td>Actions</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            packages.map((p)=>(
                                <tr key={p._id}>
                                    <td>
                                        <img src={`http://localhost:5000/uploads/${p.img}`} alt={p.span} style={{ width: '100px', height: 'auto' }} />
                                    </td>
                                    <td>{p.p}</td>
                                    <td>{p.span}</td>
                                    <td>{p.price}</td>
                                    <td className="icons">
                                    <i className="fa-solid fa-trash" style={{color:"red"}} onClick={()=>handleDelete(p._id)}></i>
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

            {
                modal&&(
                    <Modal onClose={handleCancel}>
                            <h2>Are you sure you want to delete this package?</h2>
                            <button onClick={()=>deletePackage(packageToDelete)}>Delete</button>
                            <button onClick={handleCancel}>Cancel</button>
                    </Modal>
                )
            }
            {/* notification */}
            {
                notification&&<Notification content={notification} onClose={()=>setNotification(null)}/>
            }
        </>
}