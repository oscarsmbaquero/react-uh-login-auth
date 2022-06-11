// Pages/Dashboard/index.js

import React from "react";
import { useAuthState } from "../../Context";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Header from "../Header/Header";
//import { useNavigate } from "react-router-dom";
import styles from "./dashboard.module.css";
//import Header from "../Header/Header";
//import Footer from '../Footer/Footer'

function Dashboard(props) {
 // let navigate = useNavigate();
  //const dispatch = useAuthDispatch(); // lee el método dispatch del contexto
  const userDetails = useAuthState(); //lee los detalles del usuario del contexto

  // const handleLogout = () => {
  //   logout(dispatch); //llama a la acción logout
  //   navigate("/"); //navega de nuevo al login sin usuario
  // };
  return (
    <>
      <div style={{ padding: 10 }}>
        <div className={styles.dashboardPage}>
          {/* <Header></Header> */}
        </div>
        <p>Welcome {userDetails.user.email}</p>
    </div>
    {/* <Footer></Footer> */}
    </>
    
  );
}

export default Dashboard;