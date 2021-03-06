import React,{ useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const DetailsMoto = () => {
  const { id } = useParams();
  console.log(id,'param');

  let [moto, SetMotos] = useState();
  

  useEffect(() => {
    
    fetch(`https://motogp-oscar.herokuapp.com/motos/${id}`)
      .then(response => response.json())
      .then(data => SetMotos(data))      
     }, [id]); 
 console.log(moto,'llego')
 return (
  <div>
  { !moto ? <p>Cargando...</p> : <>
  <div class="details">
      <div class="details__text">      
          <h1> mark: {moto.data.moto.mark}</h1>
          <h2> cv:{moto.data.moto.cv}</h2>          
          <h2> weight:{moto.data.moto.weight}</h2>
          <p>  {moto.data.moto.team}</p>          
       </div>
       <div  class="details__image">
         <img src={moto.data.moto.image} alt={moto.data.moto.mark}></img>
       </div>   
    </div>
  </>}
</div>
   );
}

export default DetailsMoto