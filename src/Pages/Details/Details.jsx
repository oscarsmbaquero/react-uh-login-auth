import React,{ useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';



const Details = () => {
  const { name } = useParams();
  console.log(name,'param');

  let [pilot, setPilot] = useState();
  

  useEffect(() => {
    
    fetch(`http://localhost:5000/pilots/name/${name}`)
      .then(response => response.json())
      .then(data => setPilot(data))      
     }, [name]); 
 console.log(pilot)
 return (
  <div>
  { !pilot ? <p>Cargando...</p> : <>
    <p>Name: {pilot.data.pilot[0].name}</p>
    <img src={pilot.data.pilot[0].image} alt={pilot.data.pilot[0].name}></img>
    
  </>}
</div>
   );
}

export default Details