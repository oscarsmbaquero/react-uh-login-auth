import React,{ useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';


const Delete = () => {

    const { _id  } =useParams();
    console.log(_id);

    //let [pilot, setPilot] = useState();

    useEffect(() =>{
        //fetch(`http://localhost:5000/pilots/deleteMoto/${_id}`)
          fetch(`https://motogp-oscar.herokuapp.com/pilots/delete/${_id}`)
    })   

  return (
    <div>Delete</div>

  )
}

export default Delete