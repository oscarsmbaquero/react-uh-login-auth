import React, { useState, useEffect } from "react";
import "./SplashScreen.scss";

const SplashScreen = () => {
  const [animation, setAnimation] = useState("fadeIn");

  useEffect(() => {
    setTimeout(() => setAnimation("fadeOut"), 3000);
    //https://images-na.ssl-images-amazon.com/images/I/41t8oP3wO8L.png
  }, []);

  return (
    <div className="splashScreen">
      <div className={animation}>
        <img  src ="https://images-na.ssl-images-amazon.com/images/I/41t8oP3wO8L.png" className="image" alt="motogp"/>
        {/* <div  class="image">
          <img  src ="/images/fondoMotogp.png" className="image" alt="motogp"/>
        </div> */}
        </div>
        {/* <div>
          <h1>Welcome to the Api of Motogp</h1> 
        </div>                */}
      
    </div>
  );
};

export default SplashScreen;
