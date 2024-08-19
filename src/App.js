// import logo from "./logo.svg";
import "./Styles/App.css";
import "./Styles/dashboard.css"
import SignUp from "./SignUp";
import Login from "./Login";
import Header from "./Header";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Users from "./Users";



export default function App(){

  return <div>

    <Header/>
    <Routes>
      <Route path="/register" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="users" element={<Users/>}/>
      </Route>
        

    </Routes>
  </div>
  
  // const [data, setData] = useState([]);

  //   const res = data.map((item, index) => <Content key={index} title={item.title} price={item.price} image={item.image} rating={item.rating.rate} />);

  //   useEffect(() => {
  //       fetch('https://fakestoreapi.com/products')
  //           .then((res) => res.json())
  //           .then((data )=> {console.log(data);
  //                       setData(data); }
  //                   )
  //   }, []);

  //   useEffect(() => {
  //     fetch('https://jobicy.com/api/v2/remote-jobs')
  //         .then((res) => res.json())
  //         .then((data2 )=> {console.log(data2);
  //                    }
  //                 )
  // }, []);
    
  //  return <div className={"contentDivs"}>{res}</div> ;
}
// 