import { useEffect } from "react";

export default function Notification({content, onClose}){
    useEffect(()=>{
        const timer=setTimeout(()=>{
            onClose();
        }, 5000);
        return ()=>clearTimeout(timer);

    },[onClose]);

    return (
        <div className="notification">
            {content}
        </div>
    )
    
}