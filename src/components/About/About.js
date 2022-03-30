import React, { useEffect, useState } from 'react';
import Friend from '../Frind/Friend';

const About = () => {
    const [users,setUser]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    return (
        <div>
            <h3>Route is About </h3>
            <p>Thats Is a Tranferce Page {users.length}</p>
            {
                users.map(user=><Friend
                    key={user.id}
                    user={user}
                ></Friend>)
            }
        </div>
    );
};

export default About;