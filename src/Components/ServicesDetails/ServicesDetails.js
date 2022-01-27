import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import useAuth from '../Hooks/useAuth';
import { useForm } from "react-hook-form";
import axios from 'axios';

const ServicesDetails = () => {
    const { register, handleSubmit ,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://stark-inlet-11543.herokuapp.com/orders', data)
        .then(res=>{
            if(res.data.insertedId) {
                alert('added successfully')
                reset() ;
            }
            
        });
    }
    const { user } = useAuth();
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://stark-inlet-11543.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    
    const ExactItem = data.filter(td => td.id == id);
    console.log(ExactItem);
    return (
        <div className="container">

            <h1 className="mb-5 text-success"> Details </h1>
            <h2>{ExactItem[0]?.name}</h2>
            <img height="200px" width="350px" src={ExactItem[0]?.img} alt="" />


            <h6>{ExactItem[0]?.Description}</h6>
            {/* <h5 className="mt-5"> Hello <b>{user.displayName}</b> please book now </h5> */}


           {/*  <div className="add-service">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input {...register("email")} placeholder="Email" />
                <input {...register("address")} placeholder="Address" />
                <input  type="submit" />
            </form>
            </div> */}
            <Footer></Footer>
        </div>
    );
};

export default ServicesDetails;