// Pages/Dashboard/index.js

import React, { useEffect, useState } from "react";
import VideoBackground from "../../core/VideoBackground";
import styles from "./dashboard.module.scss";
import SplashScreen from "../../../src/Components/SplashScreen/SplashScreen";



function Dashboard(props) {
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => setSplashScreen(false), 5000);
  });
  return (
    <>
     {splashScreen ? (
              <SplashScreen />
            ) : (
      
      <div style={{ padding: 10 }} >
     
        <div className={styles.dashboardPage}>
        <VideoBackground videoId="eKTOrtZzhpA"/>
        </div>
       
    </div>
    )}
    </>
    
  );
}

export default Dashboard;