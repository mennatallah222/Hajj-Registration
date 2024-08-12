// import logo from "./logo.svg";
import "./Styles/App.css";
import { data } from "../src/Components/data";
import Content from "./Components/Content";


export default function App(){
  console.log(data);
  const response=data.map((item, index)=>(
    <Content key={index} img={item.photo} title={item.title} rating={item.rating} details={item.datails} price={item.price} /> 
  ));
  return <div className={"contentDivs"}>{response}</div> ;
}
