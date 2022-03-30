import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
             <h1>React Router</h1>
             <nav >
                 <CustomLink to='/'>Home</CustomLink>
                 <CustomLink to='/about'>About</CustomLink>
                 <CustomLink to='/service'>Service</CustomLink>           
             </nav>
        </div>
    );
};

export default Header;