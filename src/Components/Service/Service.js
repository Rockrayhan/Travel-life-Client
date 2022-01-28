import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css' ;
const Service = (props) => {
    const { img , description , _id,title, number} = props.services
    return (
        <div className="col-lg-4">
            <img className="img-fluid service-img" src={img} alt="" />
            <h5> {title} </h5>
            <p><small>budget : {number} </small></p>
            <Link to={`/booknow/${_id}`}> 
            <button className="btn btn-success"> Details </button>
            </Link>

        </div>
    );
};

export default Service;