// Pages/Dashboard/index.js

import React from "react";
import VideoBackground from "../../core/VideoBackground";
import styles from "./dashboard.module.scss";



function Dashboard(props) {
 
  return (
    <>
      
      <div style={{ padding: 10 }} >
     
        <div className={styles.dashboardPage}>
        <VideoBackground videoId="eKTOrtZzhpA"/>
        </div>
       
    </div>
    
    </>
    
  );
}

export default Dashboard;