import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId}=useParams()
    const [post,setPost]=useState({})
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[postId])
    console.log(post)
    return (
        <div>
            <h2>show post details {postId}</h2>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <Outlet></Outlet>
        </div>
    );
};

export default PostDetail;