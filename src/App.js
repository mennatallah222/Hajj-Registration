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
import UpdateUser from "./UpdateUser";
import ContactUs from "./ContactUs";
import Packages from "./Packages";
import AddPackage from "./AddPackage";
import Messages from "./Messages";
import Footer from "./Footer";
import PackageDetails from "./PackageDetails";




export default function App(){

  return <div>

    <Header/>
    <Routes>
      <Route path="/register" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home />} />
      <Route path="/packages/:id" element={<PackageDetails/>}/>

      <Route path="/contact-us" element={<ContactUs />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="users" element={<Users/>}/>
        <Route path="users/:id" element={<UpdateUser/>}/>

        <Route path="packages" element={<Packages/>}/>
        <Route path="packages/add-package" element={<AddPackage/>}/>

        <Route path="messages" element={<Messages/>}/>
      </Route>
        

    </Routes>

    <Footer/>


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