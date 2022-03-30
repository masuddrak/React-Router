import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name,id,username}=props.user
    const navigate=useNavigate()
    const showDetails=()=>{
        const path=`/friend/${id}`
        navigate(path)
    }
    return (
        <div>
            <h2>name:{name}</h2>
            <Link to={'/friend/'+id}>click me</Link>
            <button onClick={showDetails }>{username} id:{id}</button>
        </div>
    );
};

export default Friend;