import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "./Components/AppRoutes";
import routes from "./Config/routes.js";
import { AuthProvider } from "./Context";
// import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import './App.scss';
//import Image from "../src/images/fondoMotoGp2.png";
//import Footer from "./Pages/Footer/Footer";
//import Header from "./Pages/Header/Header";
//import Header from "./Pages/Header/Header";

//import Header from "./Pages/Header/Header";








function App() {
  return (
   <>
  
        <AuthProvider> 
        {/* <div style={{ 
      backgroundImage: `url(https://phantom-marca.unidadeditorial.es/d41c0d81720ef7bf7ad77dbac0735bf0/resize/1320/f/jpg/assets/multimedia/imagenes/2022/05/13/16524318752231.jpg)` 
    }}>
   </div>  */}
          <Router>
          <Header />
            <Routes>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
              <Route element={<AppRoutes />} path="/dashboard" />
            </Routes>
          </Router>
          {/* <Footer/> */}
        </AuthProvider>
   </>
    
      

  );
}

export default App;