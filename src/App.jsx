import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "./Components/AppRoutes";
import routes from "./Config/routes.js";
import { AuthProvider } from "./Context";


import Header from "./Components/Header/Header";
import './App.scss';

function App() {  
  return (
   <>  
        <AuthProvider> 
          <Router>
          <Header/>
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