import React from 'react';
import { useForm } from 'react-hook-form'
import './AddPilots.scss';


const AddPilots = () => {

    const {register, handleSubmit, formState: {errors, isValid}} = useForm({mode: "onChange"});

    const onSubmit = async (formData) => {
        console.log(formData);
        try {

            const result = await fetch("http://localhost:5000/pilots" ,{
                method: "POST",
               headers: {
                        'Content-Type': 'application/json'
               },
               body: JSON.stringify(formData),
            })
            const resData = await result.json();
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
            <input type="text" name="name" placeholder="Name" {...register('name', {
                required: 'Name is required',
               
            })}/>
            {errors.name && errors.name.type === 'required' && <p>{errors.name.message}</p>}
            {errors.name && errors.name.type === 'pattern' && <p>{errors.name.message}</p>}
        </label>
        <label>
            <p>Dorsal</p>
            <input type="number" name="dorsal" placeholder="Dorsal"  {...register('dorsal')}/>
        </label>
        <label>
            <p>Nacionality</p>
            <input type="text" name="nacionality" placeholder="Nacionality"  {...register('nacionality')}/>
        </label>
        <label>
            <p>Image</p>
            <input type="text" name="image" placeholder="Url of image"  {...register('image')}/>
        </label>
        <br></br>
        <button class="button"disabled={!isValid}>Send</button>
        </div>
    </form>
    
  )
}

export default AddPilots