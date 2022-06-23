//import { Button } from '@mui/material';

import React from 'react';
import { useForm } from 'react-hook-form'
import {  useNavigate } from "react-router-dom";
import './AddTeam.scss';


const AddTeam = () => {

    const {register, handleSubmit, formState: {errors, isValid}} = useForm({mode: "onChange"});
    let navigate = useNavigate();

    const onSubmit = async (formData) => {
        console.log(formData);
        try {

            const result = await fetch("https://motogp-oscar.herokuapp.com/motos" ,{
                method: "POST",
               headers: {
                        'Content-Type': 'application/json'
               },
               body: JSON.stringify(formData),
            })
            const resData = await result.json();
            navigate("/motos");
            console.log(resData);
        
            
            
        } catch (error) {
           console.log(error); 
        }
        
    }

  return (
  <form onSubmit={handleSubmit(onSubmit)} class="form">
    <div >
       <label>
           <p>Mark</p>
           <input class="input" type="text" name="name" placeholder="Mark" {...register('mark', {
               required: 'Mark is required',
           })}/>
           {errors.name && errors.name.type === 'required' && <p>{errors.name.message}</p>}
       </label>
       <label>
           <p>C.V.</p>
           <input class="input" type="number" name="cv" placeholder="C.V."  {...register('cv')}/>
       </label>
       <label>
           <p>Weight</p>
           <input class="input" type="text" name="weight" placeholder="Weight"  {...register('weight')}/>
       </label>
       <label>
           <p>Team</p>
           <input  class="input" type="text" name="team" placeholder="Team"  {...register('team')}/>
       </label>
       <label>
           <p>Image</p>
           <input class="input" type="text" name="image" placeholder="Url of image"  {...register('image')}/>
       </label>
       <br></br>
       <button class="buttonForm"disabled={!isValid}>Send</button>
    </div>
  </form>
  )
}

export default AddTeam