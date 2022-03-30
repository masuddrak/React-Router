import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
             <h1>React Router</h1>
             <nav style={{display:'flex', justifyContent:'center'}}>
                 <CustomLink  to='/'>Home</CustomLink>
                 <CustomLink to='/about'>About</CustomLink>
                 <CustomLink to='/service'>Service</CustomLink>           
             </nav>
        </div>
    );
};

export default Header;