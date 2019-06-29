import React from 'react';
import './Header.css'

const Header = (props) => {
    return ( 
        <header className="main_header"><h1>{props.title}</h1></header>
     );
}
 
export default Header;