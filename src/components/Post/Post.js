import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Post = () => {
    const [post,setPost]=useState([])
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[post])
    return (
        <div>
            <h1>all post show {post.length}</h1>
            {
                post.map(siglPost=><Link  
                    to={`/post/${siglPost.id}`}
                    key={siglPost.id}
                    > {siglPost.id}</Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Post;