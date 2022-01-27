import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css' ;
const Service = (props) => {
    const {name, img , description , _id} = props.services
    return (
        <div className="service-card">
            <img className="img-fluid service-img" src={img} alt="" />
            <h5> {name} </h5>
            <p> {description} </p>
            <Link to={`/booknow/${_id}`}> 
            <button className="btn btn-success"> Details </button>
            </Link>

        </div>
    );
};

export default Service;