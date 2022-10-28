import React from 'react';
import { Navbar } from 'react-bootstrap';

function Header(){

    return (

        <div  >
    
        <Navbar expand="lg" className='header'>
    
            <Navbar.Brand style={{fontSize:'25px', fontWeight:'500', color:'black'}}>LOGO</Navbar.Brand>
                
                <Navbar.Text className='divider' style={{color:'black'}}>|</Navbar.Text>
                
                <Navbar.Text style={{color:'black'}}>Banking and Financial</Navbar.Text>
    
        </Navbar>
    
        </div>
    
      );
}
export default Header;