
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Pagination from './Pagination';
import Posts from './Posts/Posts';

const Blogs = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const[currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(()=> {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('http://localhost:5000/services') ;
            setPosts(res.data);
            setLoading(false);
        }

        fetchPosts();
    }, []);


    // Get Current posts
    const indexOfLastPost = currentPage * postsPerPage ;
    const indexOfFirstPost = indexOfLastPost - postsPerPage ;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost) ;


    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div id="blogs" className='mt-5 mb-5'>
            <h1 className='text-success mt-5 mb-5'>Travellers Experience blogs</h1>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination
             postsPerPage={postsPerPage} 
             totalPosts={posts.length}
             paginate={paginate} />
        </div>
    );
};

export default Blogs;