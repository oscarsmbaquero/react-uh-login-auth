import React from 'react';
import { useForm } from 'react-hook-form'
import {  useNavigate } from "react-router-dom";
import './AddPilots.scss';

//import { Container, FormControl, InputLabel, Input, FormHelperText} from '@mui/material/FormControl';



const AddPilots = () => {

    const {register, handleSubmit, formState: {errors, isValid}} = useForm({mode: "onChange"});
    let navigate = useNavigate();
    const onSubmit = async (formData) => {
        console.log(formData);
        try {

            const result = await fetch("https://motogp-oscar.herokuapp.com/pilots" ,{
                method: "POST",
                headers: {
                        'Content-Type': 'application/json'
               },
               body: JSON.stringify(formData),
            })
            const resData = await result.json();
            navigate("/list");
            console.log(resData);
            
            
            
        } catch (error) {
           console.log(error); 
        }
        
    }
  return (
    
    <form onSubmit={handleSubmit(onSubmit)} class="form">
     <div >
        <label>
            <p>Name</p>
            <input class="input" type="text" name="name" placeholder="Name" {...register('name', {
                required: 'Name is required',
               
            })}/>
            {errors.name && errors.name.type === 'required' && <p>{errors.name.message}</p>}
        </label>
        <label>
            <p>Dorsal</p>
            <input class="input" type="number" name="dorsal" placeholder="Dorsal"  {...register('dorsal')}/>
        </label>
        <label>
            <p>Nacionality</p>
            <input class="input" type="text" name="nacionality" placeholder="Nacionality"  {...register('nacionality')}/>
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

export default AddPilots