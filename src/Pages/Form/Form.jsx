import React, { useState, useEffect}  from 'react';
import { Link } from 'react-router-dom'
import './Form.scss';
import ClipLoader from "react-spinners/ClipLoader";
import Swal from "sweetalert2"



const Form = () => {
    let [pilots, setPilots] = React.useState([]);
   let [isLoading, setIsLoading] = useState(false);
   useEffect(() => {
    setIsLoading(true);//mostramos loading
    fetch('http://localhost:5000/pilots')
      .then(response => response.json())
      .then(data => setPilots(data))
      .finally(() => setIsLoading(false));//ocultamos el loading
  }, []); //El array vacío es el estado inicial y el effect no se volverá a ejecutar cuando su contenido cambie

  const deletePilot = (e, pilots) => {
    console.log(pilots,6)
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText ="Borrando"  ;

    fetch(`https://motogp-oscar.herokuapp.com/pilots/delete/${pilots}`,{
     method: 'DELETE',
     }).then(res=>{
       if(res.status === 200){
        console.log('Borrado');
      Swal.fire("Success", res.message,"success");
      fetch('http://localhost:5000/pilots')
      .then(response => response.json())
      .then(data => setPilots(data))
      .finally(() => setIsLoading(false));
      
    }
    })
  }
  //console.log(pilots);
  const loading  = (isLoading) ? <ClipLoader color={'#D0021B'}size={100}  loading={isLoading}   />: null;
  

  return (
      <div >      
        { loading }
        { pilots.map((post, key) => (        
                     
          <div key={ key } class="row">                                      
              <div >
                  <div class="card-1">
                      <div class="user" >
                      <img src ={post.image} alt={post.name}/>  
                      </div>
                      <div class="info">
                          <div class="name">
                              {post.name}
                          </div>
                          <div class="cargo">
                              {post.dorsal}
                          </div>
                          <div class="numero">
                              {post.nacionality}
                          </div>
                          <div class="buttons">
                            <Link to={`/pilots/name/${post.name}`}>
                              <button class="button">Más</button>
                            </Link>
                            <Link to={`/pilots/delete/${post._id}`}>
                              <button class="button" onClick={(e)=> deletePilot(e,post._id)}>Eliminar</button>
                            </Link>
                            <Link to={`/pilots/name/${post.name}`}>
                              <button class="button">Edit</button>
                            </Link>    
                          </div>
                          
                      </div>
                  </div>
              </div>   
          </div>
          ))}
          {/* <Footer></Footer> */}
      </div>
      
      
    );
}


export default Form