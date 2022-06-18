// Pages/Dashboard/index.js

import React from "react";
//import { useAuthState } from "../../Context";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Header from "../Header/Header";
//import { useNavigate } from "react-router-dom";
import styles from "./dashboard.module.scss";
//import Header from "../Header/Header";
//import Footer from '../Footer/Footer'

function Dashboard(props) {
 // let navigate = useNavigate();
  //const dispatch = useAuthDispatch(); // lee el método dispatch del contexto
  

  // const handleLogout = () => {
  //   logout(dispatch); //llama a la acción logout
  //   navigate("/"); //navega de nuevo al login sin usuario
  // };
  return (
    <>
      
      <div style={{ padding: 10 }} >
     
        <div className={styles.dashboardPage}>
        {/* <img  src ="/images/fondoMotogp2.png" class="imageDashboard" alt="motogp"/> */}
        </div>
       
    </div>
    
    </>
    
  );
}

export default Dashboard;