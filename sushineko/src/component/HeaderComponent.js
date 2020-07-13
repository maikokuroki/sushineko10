import React from 'react';
import { Jumbotron,Navbar,Nav,NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';

const Header = (props) =>{


    return(
        <React.Fragment>
            <Jumbotron fluid>
                <h1 className="text-lg-center">NEKO SUSHI</h1>
            </Jumbotron>
            <Navbar sticky="top" expand="md">
                <div className="container">
                    
                   <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/menu">Menu</NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <NavLink className="nav-link" to="/order">Order</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar> 
                 
        </React.Fragment>
    );
}



export default Header;