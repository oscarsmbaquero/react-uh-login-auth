import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import {  useNavigate } from "react-router-dom";
import './EditPilots.scss';
import { useParams } from 'react-router-dom';


export const EditPilots = () => {
    let [pilot, setPilot] = useState();
    const { id } = useParams();
    //console.log(id,'name');
    const {register, handleSubmit, formState: {errors, isValid}} = useForm({mode: "onChange"});
    let navigate = useNavigate();

    useEffect(() => {
    
        fetch(`http://localhost:5000/pilots/${id}`)
          .then(response => response.json())
          .then(data => setPilot(data))
         }, [id]); 
         //console.log(pilot.data.pilot.name,'pilot');

         
    const onSubmit = async (formData) => {
        console.log(formData,'datos');
        try {

            const result = await fetch(`http://localhost:5000/pilots/modify/${id}` ,{
                method: "PUT",
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
    <div>
    { !pilot ? <p>Cargando...</p> : <>
    <form onSubmit={handleSubmit(onSubmit)} class="form">
     <div >
        <label>
            <p>Name</p>
            <input type="text" name="name" placeholder={pilot.data.pilot.name}  {...register('name', {
                required: 'Name is required',
               
            })}/>
            {errors.name && errors.name.type === 'required' && <p>{errors.name.message}</p>}
            {errors.name && errors.name.type === 'pattern' && <p>{errors.name.message}</p>}
        </label>
        <label>
            <p>Dorsal</p>
            <input type="number" name="dorsal" placeholder={pilot.data.pilot.dorsal}   {...register('dorsal')}/>
        </label>
        <label>
            <p>Nacionality</p>
            <input type="text" name="nacionality" placeholder={pilot.data.pilot.nacionality}  {...register('nacionality')}/>
        </label>
        <label>
            <p>Image</p>
            <input type="text" name="image" placeholder={pilot.data.pilot.image}  {...register('image')}/>
        </label>
        <br></br>
        <button class="buttonForm"disabled={!isValid}>Send</button>
        </div>
    </form>
    </>} 
  </div>
  );

}

export default EditPilots