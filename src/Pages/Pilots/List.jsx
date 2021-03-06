import React, { useState, useEffect }  from 'react';
import './List.scss';
import Loader from "../../Components/Loader/Loader";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2"
import SearchInput from '../../Components/Search/SearchInput';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
//import CreateIcon from '@mui/icons-material/Create';

//import { Button } from '@mui/material';
import { Create } from '@mui/icons-material';

//import { DeleteIcon}   from '@material-ui/icons/DeleteIcon';


const List = () => {
   //Definimos el array de posts
   let   [pilots, setPilots] = React.useState([]);
   const [keyword, setKeyword] = useState("");
   const [isLoaded, setIsLoaded] = useState(false);

   setTimeout(() => {
    setIsLoaded(true);
  }, 3000);
 
   useEffect(() => {
     fetch('https://motogp-oscar.herokuapp.com/pilots')
       .then(response => response.json())
       .then(data => setPilots(data))
   }, []);
   console.log(pilots,'llego o no ')
   
   const deletePilot = (e, pilots) => {
   
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText ="Borrando"  ;

    fetch(`https://motogp-oscar.herokuapp.com/pilots/delete/${pilots}`,{
     method: 'DELETE',
     }).then(res=>{
       if(res.status === 200){
        console.log('Borrado');
      Swal.fire("Eliminado", res.message,"success");
      fetch('http://localhost:5000/pilots')
      .then(response => response.json())
      .then(data => setPilots(data))
      
    }
    })
  }   
  
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
    <>
    <SearchInput placeholder="Filter by pilot " onChange={onInputChange}  />
       <div class="container">
       {isLoaded === false ? (
        <Loader />
      ) : (
        <>
         { filteredPilots.map((post, key) => (
           <div key={ key } class="flip-container">
                <div class="card">
                    <div class="front">
                        <img class="flex-item-image-detail"src={post.image} alt={post.name}/>
                    </div>
                    <div class="back">
                        <div class="buttons2">
                            <IconButton onClick={(e)=> deletePilot(e,post._id)}
                                 aria-label="delete" 
                                 size="large" 
                                 color="error"
                                 ><DeleteIcon fontSize="inherit" />
                            </IconButton>
                            <Link to={`/pilots/name/${post.name}`}>
                              <IconButton  
                                 aria-label="delete" 
                                 color="success" 
                                 ><AddIcon />
                              </IconButton>
                            </Link>
                            <Link to={`/edit/${post._id}`}>
                              <IconButton  
                                 aria-label="delete" 
                                 color="secondary" 
                                 ><Create />
                              </IconButton>
                            </Link>
                        </div>
                        <div>
                          <p>{ post.name }</p> 
                          <p>{ post.dorsal }</p> 
                          <p>{ post.nacionality }</p>
                        </div>
                    </div>
                </div> 
           </div>
           ))}
           </>
           )}
           {/* <Footer></Footer> */}
       </div>
       </>
     );
 }


export default List