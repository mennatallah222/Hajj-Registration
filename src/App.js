// import logo from "./logo.svg";
import "./Styles/App.css";
import { data } from "../src/Components/data";
import Content from "./Components/Content";
import React, { useEffect, useState } from "react";



export default function App(){
  const [data, setData] = useState([]);

    const res = data.map((item, index) => <Content key={index} title={item.title} price={item.price} image={item.image} rating={item.rating.rate} />);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data )=> {console.log(data);
                        setData(data); }
                    )
    }, []);

   return <div className={"contentDivs"}>{res}</div> ;
}
// 