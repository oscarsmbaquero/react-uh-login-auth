import React,{ useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
//import { Link } from 'react-router-dom'
//import { useEffect, useState } from 'react';
//import ClipLoader from "react-spinners/ClipLoader";


const Details = () => {
  const { name } = useParams();
  console.log(name,'param');

  let [pilot, setPilot] = useState();
  

  useEffect(() => {
    //setIsLoading(true);//mostramos loading
    //fetch('http://localhost:5000/pilots/name/${name}')
    fetch(`http://localhost:5000/pilots/name/${name}`)
      .then(response => response.json())
      .then(data => setPilot(data))
      //ocultamos el loading
     }, [name]);          
           //console.log(pilot.data,'finally'); 
 
 console.log(pilot)
 return (
  <div>
  { !pilot ? <p>Cargando...</p> : <>
    <p>Name: {pilot.data.pilot[0].name}</p>
    <img src={pilot.data.pilot[0].image} alt="alt"></img>
      
      
    
  </>}
</div>
   );
}

export default Details