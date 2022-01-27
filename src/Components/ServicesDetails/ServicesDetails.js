import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import useAuth from '../Hooks/useAuth';
import { useForm } from "react-hook-form";
import axios from 'axios';

const ServicesDetails = () => {
    /* const { register, handleSubmit ,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://stark-inlet-11543.herokuapp.com/orders', data)
        .then(res=>{
            if(res.data.insertedId) {
                alert('added successfully')
                reset() ;
            }
            
        });
    } */
    const { user } = useAuth();
    const { _id } = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${_id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    
    // const ExactItem = data.filter(td => td.id == _id);
    console.log(data);
    return (
        <div className="container">

            <h1 className="mb-5 text-success"> Details </h1>
            <h3 className='mt-4 mb-4'> Details of <b> {data.title}</b> Tour </h3>
            <h3 className='mt-4 mb-4'>Traveller name: {data.name}  </h3>
            <h3 className='mt-4 mb-4'>Traveller location: {data.location}</h3>
            <img height="200px" width="350px" src={data.img} alt="" />
            <h6><b>Budget: {data.number}</b></h6>
            <h6 className='mt-4 mb-4'> <b> Description:</b> {data.Description}</h6>
            



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