import React, { useContext, useEffect, useState } from 'react';
import { useAuthDispatch, logout } from "../../Context";
import { useNavigate } from "react-router-dom";
import './Header.scss';
import { Link } from 'react-router-dom';
import { AuthStateContext } from '../../Context/context';
import { useAuthState } from "../../Context";
import { GoSignOut } from "react-icons/go";
import { IntlProvider, FormattedMessage } from "react-intl";

import Spanish from "../../lang/es.json";
import English from "../../lang/en.json";
import I18n from '../../Components/I18n';

export const ContextI18n = React.createContext();




const Header = () => {

  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState(Spanish);

  useEffect(() => {
    if (locale === "es-ES") {
      setMessages(Spanish)
    } else {
      setMessages(English)
    }
  }, [locale]);

  function selectLanguage(newLocale) {
    setLocale(newLocale);
    if (newLocale === "es-ES") {
      setMessages(Spanish)
    } else {
      setMessages(English)
    }
  }
 


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
    <ContextI18n.Provider value={{ locale, selectLanguage }}>
          <IntlProvider locale={locale} messages={messages}>
                <>
                { userLogger ? 
                <header className="header">
                    <div>
                        <Link to="/list">
                        <p class="p">
                          <FormattedMessage
                            id="app.pilots"
                          />
                        </p>              
                          </Link>
                    </div>
                    <div>      
                          <Link to="/motos">
                        <p class="p">
                          <FormattedMessage
                            id="app.motos"
                          />
                        </p>               
                          </Link>
                    </div>
                    <div>      
                          <Link to="/circuits">
                        <p class="p">
                            <FormattedMessage
                              id="app.circuits"
                            />
                        </p>              
                          </Link>
                    </div> 
                    <div>     
                          <Link to="/form">
                        <p class="p">
                            <FormattedMessage
                              id="app.form"
                            />
                        </p>                
                          </Link>
                    </div> 
                    <div>     
                          <I18n/>
                    </div>
                    <div class="logout">
                        <p> {userDetails.user.email}</p>
                        <button class="button__logout"  onClick={handleLogout}><GoSignOut  /></button>
                    </div>    
                    
                </header> : '' }
                </>  
          </IntlProvider>    
      </ContextI18n.Provider>

    
    
    
  )
}

export default Header;