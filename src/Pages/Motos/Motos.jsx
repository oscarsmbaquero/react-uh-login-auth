import React, { useState, useEffect } from 'react'
import '../Pilots/List.scss';

const Motos = () => {

    let [motos, SetMotos] = React.useState([]);
    let [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);//mostramos loading
        fetch('https://motogp-oscar.herokuapp.com/motos')
          .then(response => response.json())
          .then(data => SetMotos(data))
          .finally(() => setIsLoading(false));//ocultamos el loading
      }, []); //El array vacío es el estado inicial y el effect no se volverá a ejecutar cuando su contenido cambie
      console.log(motos);
      const loading = (isLoading) ? 'Loading...' : null;

      return (
        <fieldset>
           <div class="container">
             { loading }
             { motos.map((post, key) => (
               <div key={ key } class="flip-container">
                    <div class="card">
                        <div class="front">
                            <img class="flex-item-image-detail"src={post.image} alt={post.mark}/>
                        </div>  
                        <div class="back">
                            <p>{ post.mark }</p> 
                            <p>{ post.cv }</p> 
                            <p>{ post.weight }</p>
                            <button>Mas info</button>
                        </div>
                    </div>
               </div>))}
           </div>
         </fieldset>);
}

export default Motos