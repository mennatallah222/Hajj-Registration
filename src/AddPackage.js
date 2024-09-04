import axios from './api/axios';
import { useState } from "react";

export default function AddPackage(){
    
    const [data, setData]=useState({
        img:null,
        span:"", //span is the type of the package: best seller??
        p:"",
        price:""
    });
    
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState(false);


    const handleImageChange=(e)=>{
        setData({...data, img:e.target.files[0]});
    }

    async function Submit(e) {
        e.preventDefault();
    
        setErrorMsg("");
        setSuccessMsg(false);
    
        const formData = new FormData();
        formData.append('img', data.img);
        formData.append('span', data.span);
        formData.append('p', data.p);
        formData.append('price', data.price);
    
        // console.log("Selected file:", data.img);

        try {
            const response = await axios.post('/cards/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            setSuccessMsg(true);
            console.log("Request was successful", response.data);
    
            if (response.status === 200) {
                window.location.pathname = "/";
            }
        } 
        catch (err) {
            console.error("Error occurred:", err);
            console.error("Response data:", err.response?.data);
            setErrorMsg(err.response?.data?.message || 'An error occurred');
        }
    }
    
    
    
    return (
        <div id='package-form'>

        
        <form onSubmit={Submit} style={{display:"flex", justifyContent:"center", color:"white", flexDirection:"column", padding:"20px", gap:"10px", width:"90%"}} >


            <label htmlFor="p">Package Name </label>
                <input
                    value={data.p}
                    onChange={e => setData({...data, p: e.target.value})}
                    type="text"
                    placeholder="Enter package name..."
                />
                
                <label htmlFor="span">Type </label>
                <input
                    value={data.span}
                    onChange={e => setData({...data, span: e.target.value})}
                    type="text"
                    placeholder="Enter package type..."
                />
                
                <label htmlFor="price">Price </label>
                <input
                    value={data.price}
                    onChange={e => setData({...data, price: e.target.value})}
                    type="price"
                    placeholder="Enter price..."
                />

                <label htmlFor="img">Image </label>
                <input
                    onChange={handleImageChange}
                    type="file"
                />
                
                <button type="submit">Submit</button>

                {/* displaying the errors coming from the server */}
                {errorMsg &&!successMsg ? (
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <i className="error fa-solid fa-circle-exclamation"></i>
                        <p className="error" style={{ margin: 0 }}>{errorMsg}</p>
                    </div>
                ) : successMsg && !errorMsg? (
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}>
                        <i className="info fa-solid fa-check" style={{borderRadius:"50%", border:"1px solid rgb(7, 183, 7)", padding:"5px"}}></i>
                        <p className="info" style={{ margin: 0, marginBottom: -10 }}>Added successfully!</p>
                    </div>
                ) : null}



        </form>
        </div>
    )
}