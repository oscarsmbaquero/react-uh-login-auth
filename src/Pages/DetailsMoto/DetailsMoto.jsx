import React,{ useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const DetailsMoto = () => {
  const { id } = useParams();
  console.log(id,'param');

  let [moto, SetMotos] = useState();
  

  useEffect(() => {
    
    fetch(`http://localhost:5000/motos/${id}`)
      .then(response => response.json())
      .then(data => SetMotos(data))      
     }, [id]); 
 console.log(moto,'llego')
 return (
  <div>
  { !moto ? <p>Cargando...</p> : <>
    <p>Name: {moto.data.moto.mark}</p>
    <img src={moto.data.moto.image} alt={moto.data.moto.mark}></img>
    
  </>}
</div>
   );
}

export default DetailsMoto