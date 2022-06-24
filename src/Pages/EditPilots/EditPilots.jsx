import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import {  useNavigate } from "react-router-dom";
import './EditPilots.scss';
import { useParams } from 'react-router-dom';


export const EditPilots = () => {
    let [pilot, setPilot] = useState();
    const { id } = useParams();
    //console.log(id,'name');
    const { register, handleSubmit, formState: {errors, isValid}, setValue, } = useForm({mode: "onChange"});
    let navigate = useNavigate();

    useEffect(() => {
    
        fetch(`https://motogp-oscar.herokuapp.com/pilots/${id}`)
          .then(response => response.json())
          .then(data => setPilot(data))
         }, [id]); 
         //console.log(pilot.data.pilot.name,'pilot');

         
    const onSubmit = async (formData) => {
        console.log(formData,'datos');
        try {

            const result = await fetch(`https://motogp-oscar.herokuapp.com/pilots/modify/${id}` ,{
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
            <input class="input" {...setValue("name", pilot.data.pilot.name)} type="text" name="name" placeholder="Name"  {...register('name', {
               
                required: 'Name is required',
               
            })}/>
            {errors.name && errors.name.type === 'required' && <p>{errors.name.message}</p>}
        </label>
        <label>
            <p>Dorsal</p>
            <input class="input" {...setValue("dorsal", pilot.data.pilot.dorsal)} type="number" name="dorsal" placeholder="Dorsal"   {...register('dorsal')}/>
        </label>
        <label>
            <p>Nationality</p>
            <input class="input" {...setValue("nacionality", pilot.data.pilot.nacionality)} type="text" name="nacionality" placeholder="Nationality"  {...register('nacionality')}/>
        </label>
        <label>
            <p>Image</p>
            <input class="input" {...setValue("image", pilot.data.pilot.image)} type="text" name="image" placeholder="url of image"  {...register('image')}/>
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