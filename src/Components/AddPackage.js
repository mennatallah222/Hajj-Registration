import axios from '../api/axios';
import { useState } from "react";

export default function AddPackage(){
    
    const [data, setData]=useState({
        img:null,
        span:"", //span is the type of the package: best seller
        p:"",
        price:"",
        includes:[],
        excludes:[],
        description:"",
        packageProvider:"",
        packageProviderContact:""
    });
    
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState(false);
    const [includesInput, setIncludesInput] = useState("");
    const [excludesInput, setExcludesInput] = useState("");


    const handleImageChange=(e)=>{
        setData({...data, img:e.target.files[0]});
    }

    const addIncludeItem=()=>{
        if(includesInput.trim()){
            setData({...data, includes:[...data.includes, includesInput]});
            setIncludesInput("");
        }
    };

    const addExcludeItem=()=>{
        if(excludesInput.trim()){
            setData({...data, excludes:[...data.excludes, excludesInput]});
            setExcludesInput("");
        }
    };

    const validateForm = () => {
        if (!data.img || !data.p || !data.span || !data.price) {
            setErrorMsg('All fields are required');
            return false;
        }
        return true;
    }

    async function Submit(e) {
        e.preventDefault();
    
        setErrorMsg("");
        setSuccessMsg(false);

        if(!validateForm()) return;

        const formData = new FormData();
        formData.append('img', data.img);
        formData.append('span', data.span);
        formData.append('p', data.p);
        formData.append('price', data.price);
        formData.append('includes', data.includes);
        formData.append('excludes', data.excludes);
        formData.append('description', data.description);
        formData.append('packageProvider', data.packageProvider);
        formData.append('packageProviderContact', data.packageProviderContact);

        // console.log("Selected file:", data.img);

        try {
            const response = await axios.post('/cards/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            setSuccessMsg(true);
            console.log("Request was successful", response.data);
    
            if (response.status === 201) {
                window.location.pathname = "/dashboard/packages";
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

                <label htmlFor="description">Description </label>
                <input
                    value={data.description}
                    onChange={e => setData({...data, description: e.target.value})}
                    type="text"
                    placeholder="Enter description..."
                />


                <label htmlFor="packageProvider">Package Provider </label>
                <input
                    value={data.packageProvider}
                    onChange={e => setData({...data, packageProvider: e.target.value})}
                    type="text"
                    placeholder="Enter packageProvider..."
                />

                <label htmlFor="packageProviderContact">Package Provider Contact </label>
                <input
                    value={data.packageProviderContact}
                    onChange={e => setData({...data, packageProviderContact: e.target.value})}
                    type="text"
                    placeholder="Enter package provider contact..."
                />


                <label htmlFor="img">Image </label>
                <input
                    onChange={handleImageChange}
                    type="file"
                />
                
                <label htmlFor="includes">Includes</label>
                <div style={{ display: "flex", gap: "10px" }}>
                    <input
                        value={includesInput}
                        onChange={e => setIncludesInput(e.target.value)}
                        type="text"
                        placeholder="Add an item to include..."
                    />
                    <button type="button" onClick={addIncludeItem}>Add</button>
                </div>
                <ul>
                    {data.includes.map((include, index) => (
                        <li key={index}>{include}</li>
                    ))}
                </ul>

                <label htmlFor="excludes">Excludes</label>
                <div style={{ display: "flex", gap: "10px" }}>
                    <input
                        value={excludesInput}
                        onChange={e => setExcludesInput(e.target.value)}
                        type="text"
                        placeholder="Add an item to exclude..."
                    />
                    <button type="button" onClick={addExcludeItem}>Add</button>
                </div>
                <ul>
                    {data.excludes.map((exclude, index) => (
                        <li key={index}>{exclude}</li>
                    ))}
                </ul>


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