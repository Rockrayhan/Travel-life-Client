import { LinearProgress } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <LinearProgress />
    }


    return (
        <div className='mb-4'>
            {posts.map(post => (
                <div key={post.id} className='container' >
                  
                   <img className="img-fluid service-img" src={post.img} alt="" />
                    <h5> {post.title} </h5>
                    <p><small>budget : {post.number} </small></p>
                    <Link to={`/booknow/${post._id}`}>
                        <button className="btn btn-success mb-4"> Details </button>
                    </Link>
                  

                </div>
           
                /*   <li key={post.id} className='list-group-item' >
                      {post.title}
  
                  </li> */


            ))}


        </div>
    );
};

export default Posts;