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
import I18n from '../I18n';

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
      setUserLogger(true);
    }else{
      setUserLogger(false);
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
                    <div >
                      <img  src ="/images/fondoMotogp.png" class="image" alt="motogp"/>
                        {/* <img  src ="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/95/52/6d/95526ddc-639b-ab76-2796-296bf559ee0f/AppIcon-1x_U007emarketing-0-8-0-85-220.png/1200x630wa.png" class="image" alt="motogp"/>       */}
                    </div>
                    <div class="options">
                      <div>
                          <Link to="/list">
                              <p class="p">
                                <FormattedMessage id="app.pilots"/>
                              </p>              
                          </Link>
                      </div>
                      <span class="span">/</span>
                      <div>      
                            <Link to="/motos">
                          <p class="p">
                            <FormattedMessage id="app.motos"/>
                          </p>               
                            </Link>
                      </div>
                      <span class="span">/</span>
                      <div>      
                            <Link to="/circuits">
                              <p class="p">
                                  <FormattedMessage id="app.circuits"/>
                              </p>              
                            </Link>
                      </div>
                      <span class="span">/</span>
                      <div>     
                            <Link to="/addMoto">
                              <p class="p">
                                  <FormattedMessage id="app.addMoto"/>
                              </p>                
                            </Link>
                      </div> 
                      <span class="span">/</span>
                      <div>     
                            <Link to="/addPilot">
                              <p class="p">
                                  <FormattedMessage id="app.addPilot"/>
                              </p>                
                            </Link>
                      </div> 
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