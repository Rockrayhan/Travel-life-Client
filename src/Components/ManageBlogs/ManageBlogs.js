import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const ManageBlogs = () => {
    const [services, setServices] = useState([]);
    const { _id } = useParams();

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


     const handleDelete = id => {
        const proceed = window.confirm('Are you sure, You want to Delete..!!');
        if (proceed) {
            const url = `http://localhost:5000/services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = services.filter(service => service._id !== id);
                        setServices(remaining)

                    }
                });
        }
    } 


    return (
        <div>
            <h1 id="services" className="mt-5 mb-5 text-danger">Manage All the Blogs</h1>
            <div className='container'>

                {
                    services.map(service => <div
                        service={service}
                        key={service._id}
                    >
                        <div className='col my-5'>

                            <h1>{service.title}</h1>
                            <img className='img-fluid service-img' src={service.img} alt="" />


                            <button style={{marginLeft:'20px'}} onClick={() => handleDelete(service._id)} className="btn btn-danger"> Delete</button>


                        </div>




                    </div>)
                }

            </div>
        </div>
    );
};

export default ManageBlogs;