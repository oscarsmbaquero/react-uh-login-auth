import React, { useState, useEffect }  from 'react'
import './Form.scss';
import ClipLoader from "react-spinners/ClipLoader";



const Form = () => {
    let [pilots, setPilots] = React.useState([]);
   let [isLoading, setIsLoading] = useState(false);
   useEffect(() => {
    setIsLoading(true);//mostramos loading
    fetch('https://motogp-oscar.herokuapp.com/pilots')
      .then(response => response.json())
      .then(data => setPilots(data))
      .finally(() => setIsLoading(false));//ocultamos el loading
  }, []); //El array vacío es el estado inicial y el effect no se volverá a ejecutar cuando su contenido cambie
  console.log(pilots);
  const loading  = (isLoading) ? <ClipLoader color={'#D0021B'}size={100}  loading={isLoading}   />: null;
  

  return (
      <div >
      
        { loading }
        { pilots.map((post, key) => (
        
                     
          <div key={ key } class="row">                                      
    <div class="col-md-6">
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