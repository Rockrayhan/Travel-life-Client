import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import Service from '../Service/Service';
import './Services.css' ;
const Services = () => {
    const [services , setServices] = useState([]);
    const { isLoading} = useAuth();

    useEffect( ()=>{
        fetch('https://stark-inlet-11543.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    } ,[])
    if (isLoading) {
        return  <Spinner animation="grow" />
    }
    return (
        <div>
            <h1 id="services" className="mt-5 mb-5 text-success">This is our Services</h1>
            <div className="services">

                {
                    services.map(service=><Service
                    services={service}
                    key={service._id}
                    ></Service>)
                }

            </div>
            

        </div>
    );
};

export default Services;