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
import { useState } from "react";




export default function App(){


  const [night, setNight]=useState(false);
    const handleNight=()=>{
        setNight((prev)=>!prev);
    };

  return <div className={`app ${night? 'night-mode':''}`}>

    <Header onNightToggle={handleNight} night={night}/>
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
  }