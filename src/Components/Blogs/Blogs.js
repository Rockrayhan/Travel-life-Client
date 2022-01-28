import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Posts from './Posts/Posts';

const Blogs = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const[currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(()=> {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts') ;
            setPosts(res.data);
            setLoading(false);
        }

        fetchPosts();
    }, []);

    

    return (
        <div className='mt-5 mb-5'>
            <h1 className='text-primary'>Here are all the blogs</h1>
            <Posts posts={posts} loading={loading} />
        </div>
    );
};

export default Blogs;