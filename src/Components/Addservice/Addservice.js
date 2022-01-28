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
            <h2 className="mb-4 text-success">Add Your experience </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true, maxLength: 20 })} placeholder="Tour Title" />
                <input {...register("name")} placeholder="Your name" />
                <input type="number" {...register("number")}  placeholder="Money Spent" />
                <input {...register("location")} placeholder="Your Location" />
                <textarea {...register("Description")} placeholder="Description" />
                <input {...register("img")} placeholder="img-url" />
                <input type="submit" />
            </form>

        </div>
    );
};

export default Addservice;