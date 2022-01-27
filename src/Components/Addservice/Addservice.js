import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Addservice.css' ;
const Addservice = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data =>{ 
        console.log(data);
        axios.post('https://stark-inlet-11543.herokuapp.com/services', data)
        .then(res=>{
            if(res.data.insertedId) {
                alert('added successfully')
                reset() ;
            }
            
        })
    }
    return (
        <div className="add-service">
            <h2 className="mb-4 text-success"> please Add a service </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("Description")} placeholder="Description" />
                <input {...register("img")} placeholder="img-url" />
                <input type="submit" />
            </form>

        </div>
    );
};

export default Addservice;