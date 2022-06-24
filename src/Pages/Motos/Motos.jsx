import React, { useState, useEffect } from 'react'
import '../Pilots/List.scss';
import Loader from "../../Components/Loader/Loader";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2"
import SearchInput from '../../Components/Search/SearchInput';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Create } from '@mui/icons-material';

const Motos = () => {

    let [motos, SetMotos] = React.useState([]);
    const [keyword, setKeyword] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

   useEffect(() => {
    fetch('https://motogp-oscar.herokuapp.com/motos')
      .then(response => response.json())
      .then(data => SetMotos(data))
  }, []);
  const deleteMoto = (e, motos) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText ="Borrando"  ;

    fetch(`https://motogp-oscar.herokuapp.com/motos/delete/${motos}`,{
     method: 'DELETE',
     }).then(res=>{
       if(res.status === 200){
        console.log('Borrado');
      Swal.fire("Eliminado", res.message,"success");
      fetch('http://localhost:5000/motos')
      .then(response => response.json())
      .then(data => SetMotos(data))
      
    }
    })
  }
  const filteredMotos = motos.filter(
    (motos) =>
    motos.mark.toLowerCase().includes(keyword) 
    );

  // //Hago una función generica que me ejecute el seteado de la variable de estado keyword con cualquier input al que se lo adjudique
  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  console.log(filteredMotos,'filter')
      

      return (
      <>
        <SearchInput placeholder="Filter by team " onChange={onInputChange}  />
           <div class="container">
            {isLoaded === false ? (
               <Loader />
            ) : (
              <>
             { filteredMotos.map((post, key) => (
               <div key={ key } class="flip-container">
                    <div class="card">
                        <div class="front">
                            <img class="flex-item-image-detail"src={post.image} alt={post.mark}/>
                        </div>  
                        <div class="back">
                        <div class="buttons2">
                        <IconButton onClick={(e)=> deleteMoto(e,post._id)}
                                 aria-label="delete" 
                                 size="large" 
                                 color="error"
                                 ><DeleteIcon fontSize="inherit" />
                            </IconButton>
                            <Link to={`/motos/${post._id}`}>
                              <IconButton  
                                 aria-label="delete" 
                                 color="success" 
                                 ><AddIcon />
                              </IconButton>
                            </Link>
                            <Link to={`/edit/moto/${post._id}`}>
                              <IconButton  
                                 aria-label="delete" 
                                 color="secondary" 
                                 ><Create />
                              </IconButton>
                            </Link>
                        </div>
                            <p>{ post.mark }</p> 
                            <p>{ post.cv }</p> 
                            <p>{ post.weight }</p>
                            
                        </div>
                    </div>
               </div>
               ))}
               </>
               )}
               </div>
         </>
         
         );
}

export default Motos