import React, { useState, useEffect}  from 'react';
import { Link } from 'react-router-dom'
import './Form.scss';
import ClipLoader from "react-spinners/ClipLoader";
import Swal from "sweetalert2"
import SearchInput from '../../Components/Search/SearchInput';




const Form = () => {
    let [pilots, setPilots] = React.useState([]);
   let [isLoading, setIsLoading] = useState(false);
   const [keyword, setKeyword] = useState("");
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
  // console.log(pilots[1].name);
  const filteredPilots = pilots.filter(
    (pilots) =>
      pilots.name.toLowerCase().includes(keyword) 
    );

  // //Hago una función generica que me ejecute el seteado de la variable de estado keyword con cualquier input al que se lo adjudique
  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  console.log(filteredPilots,'filter')

  return (
      <div >      
        { loading }
        <SearchInput placeholder="Filter by pilot " onChange={onInputChange} />
        {/* <FilerPilots pilots={filteredPilots}/> */}
        { filteredPilots.map((post, key) => (        
                     
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