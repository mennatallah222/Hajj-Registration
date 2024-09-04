import axios from "./api/axios";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import Notification from "./Notification";

export default function Messages(){
    const [messages, setMessages]=useState([]);

    const [modal, setModal]=useState(false);
    const [messageToDelete,setMessageToDelete]=useState(null);
    const [notification, setNotification]=useState(null);


    useEffect(()=>{
        axios.get('/contact-us/contacts')
            .then((data)=>setMessages(data.data));
    }, []);

    function deleteMessage(id){
        axios.delete(`/contact-us/delete/${id}`, {})
            .then(()=>{
                setMessages(messages.filter(m=>m._id!==id));
                setModal(false);
                setNotification("Message deleted successfully!");
            })
    }

    const handleDelete=(id)=>{
        setMessageToDelete(id);
        setModal(true);
    }

    const handleCancel=(id)=>{
        setMessageToDelete(null);
        setModal(false);
    }

    return <>
        <div style={{padding:"20px", display:"flex", flexDirection:"column"}}>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Message</td>
                        <td>Actions</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        messages.map((m)=>(
                            <tr key={m._id}>
                                <td>{m.name}</td>
                                <td>{m.email}</td>
                                <td>{m.message}</td>

                                <td className="icons">
                                    <button className="delete-btn" onClick={()=>handleDelete(m._id)}>Delete</button>
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
                     <h2>Are you sure you want to delete this message?</h2>
                            <button onClick={()=>deleteMessage(messageToDelete)}>Delete</button>
                            <button onClick={handleCancel}>Cancel</button>
                </Modal>
            )
        }

        {
            notification&&<Notification content={notification} onClose={()=>setNotification(null)}/>
        }
    </>
}

// fa-solid fa-trash 