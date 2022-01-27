import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';

const ServicesDetails = () => {
    
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
            



          
            <Footer></Footer>
        </div>
    );
};

export default ServicesDetails;