import React,{ useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './Details.scss'



const Details = () => {
  const { name } = useParams();
  //console.log(name,'param');

  let [pilot, setPilot] = useState();
  

  useEffect(() => {
    
    fetch(`https://motogp-oscar.herokuapp.com/pilots/${name}`)
      .then(response => response.json())
      .then(data => setPilot(data))
     }, [name]); 
     console.log(pilot,'pilot')
 return (
  <div>
    { !pilot ? <p>Cargando...</p> : <>
      <div class="details">
          <div class="details__text">
            <h1> {pilot.data.pilot[0].name}</h1>
            <h2> {pilot.data.pilot[0].dorsal}</h2>
            <h3>  {pilot.data.pilot[0].nacionality}</h3>
            <p>  {pilot.data.pilot[0].moto[0]?.team.length > 0 && pilot.data.pilot[0].moto[0].team}</p>
          </div>
          <div class="details__image">
            <img src={pilot.data.pilot[0].image} alt={pilot.data.pilot[0].name}></img>
          </div>
      </div>    
    </>}
  </div>
   );
}

export default Details