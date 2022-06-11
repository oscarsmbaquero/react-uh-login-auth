import React, { useContext, useEffect, useState } from 'react';
import { useAuthDispatch, logout } from "../../Context";
import { useNavigate } from "react-router-dom";
import './Header.scss';
import { Link } from 'react-router-dom';
import { AuthStateContext } from '../../Context/context';
import { useAuthState } from "../../Context";
import { GoSignOut } from "react-icons/go";


const Header = () => {
  let navigate = useNavigate();
  const dispatch = useAuthDispatch(); // lee el método dispatch del contexto
  //const userDetails = useAuthState(); //lee los detalles del usuario del contexto
  const [ userLogger, setUserLogger]= useState(false);
  const { user } = useContext(AuthStateContext);
  const userDetails = useAuthState(); //lee los detalles del usuario del contexto

   useEffect(()=>{
    if (user){
      setUserLogger(true)
    }
    
   },[user])

  const handleLogout = () => {
    logout(dispatch); //llama a la acción logout
    navigate("/"); //navega de nuevo al login sin usuario
  };

  
  return (
    <>
    { userLogger ? 
    <header className="header">
    <div>
        <Link to="/list">
          <button class="button">Pilots</button>
        </Link>
        <Link to="/motos">
          <button class="button">Motos</button>
        </Link>
        <Link to="/circuits">
          <button class="button">Circuitos</button>
        </Link>
        <Link to="/form">
          <button class="button">Formulario</button>
        </Link>
        <div>
          
        </div>
        
    </div>
    <div class="logout">
    <p>{userDetails.user.email}</p>
    <button class="button__logout"  onClick={handleLogout}><GoSignOut  /></button>
    </div>    
        
     </header> : '' }
  </>  
     
    
    
    
  )
}

export default Header;