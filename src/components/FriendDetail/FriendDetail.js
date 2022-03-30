import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const [friend,setFriend]=useState({})
    const {friendId}=useParams()
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])
    return (
        <div>
            <h1>Friend Details ID:{friendId}</h1>
            <h3>{friend.name}</h3>
            <h3>{friend.email}</h3>
            <p>Address:{friend.address?.street}</p>
            <p>City:{friend.address?.city}</p>
            <p>Land:{friend.address?.geo?.lng}</p>
        </div>
    );
};

export default FriendDetail;