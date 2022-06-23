import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import {  useNavigate } from "react-router-dom";
import './EditMoto.scss';
import { useParams } from 'react-router-dom';

const EditMoto = () => {
    let [moto, setMoto] = useState();
    const { id } = useParams();

    const { register, handleSubmit, formState: {errors, isValid}, setValue, } = useForm({mode: "onChange"});
    let navigate = useNavigate();

    useEffect(() => {
    
        fetch(`http://localhost:5000/motos/${id}`)
          .then(response => response.json())
          .then(data => setMoto(data))
         }, [id]); 

         const onSubmit = async (formData) => {
            console.log(formData,'datos');
            try {
    
                const result = await fetch(`https://motogp-oscar.herokuapp.com/motos/modify/${id}` ,{
                    method: "PUT",
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
    <div>
    { !moto ? <p>Cargando...</p> : <>
    <form onSubmit={handleSubmit(onSubmit)} class="form">
     <div >
        <label>
            <p>Mark</p>
            <input class="input" {...setValue("mark", moto.data.moto.mark)} type="text" name="name" placeholder="Mark of team"  {...register('mark', {
               
                required: 'Name is required',
               
            })}/>
            {errors.name && errors.name.type === 'required' && <p>{errors.name.message}</p>}
        </label>
        <label>
            <p>CV</p>
            <input class="input" {...setValue("cv", moto.data.moto.cv)} type="number" name="cv" placeholder="CV"   {...register('cv')}/>
        </label>
        <label>
            <p>Weight</p>
            <input class="input" {...setValue("weight", moto.data.moto.weight)} type="text" name="weight" placeholder="Weight"  {...register('weight')}/>
        </label>
        <label>
            <p>Team</p>
            <input class="input" {...setValue("team", moto.data.moto.team)} type="text" name="team" placeholder="Team"  {...register('team')}/>
        </label>
        <label>
            <p>Image</p>
            <input class="input" {...setValue("image", moto.data.moto.image)} type="text" name="image" placeholder="url of image"  {...register('image')}/>
        </label>
        <br></br>
        <button class="buttonForm"disabled={!isValid}>Send</button>
        </div>
    </form>
    </>} 
  </div>
  )
}

export default EditMoto