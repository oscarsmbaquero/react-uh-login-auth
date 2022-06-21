import React,{ useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './Details.scss'



const Details = () => {
  const { name } = useParams();
  //console.log(name,'param');

  let [pilot, setPilot] = useState();
  

  useEffect(() => {
    
    fetch(`http://localhost:5000/pilots/name/${name}`)
      .then(response => response.json())
      .then(data => setPilot(data))
     }, [name]); 
     console.log(pilot,'pilot')
 return (
  <div>
  { !pilot ? <p>Cargando...</p> : <>
    <div class="details">
      <div class="text">
       <h1> {pilot.data.pilot[0].name}</h1>
       <h2> {pilot.data.pilot[0].dorsal}</h2>
       <p>  {pilot.data.pilot[0].nacionality}</p>
       <p>  {pilot.data.pilot[0].moto[0]?.team.length > 0 && pilot.data.pilot[0].moto[0].team}</p>
      </div>
      <div>
       <img src={pilot.data.pilot[0].image} alt={pilot.data.pilot[0].name}></img>
      </div>
       
    </div>
    
    
  </>}
</div>
   );
}

export default Details