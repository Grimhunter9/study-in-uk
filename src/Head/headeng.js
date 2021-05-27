import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Mycontext } from '../Mycontext/Context';
import EN from './eng.jpg';
import AB from './arab.jpg';


import Logo from './best.jpg';


//© 2021 All Rights Reserved Terms of Use and Privacy Policy  add in the end 

/*  */


class headeng extends Component {

    render() {
        return (

            <Mycontext.Consumer>
                {({ change, changelan }) =>
                    <div>
                        <Navbar className="header" collapseOnSelect expand="lg">
                            <Navbar.Brand><HashLink><img src={Logo} className="log" alt="my-logo" /></HashLink></Navbar.Brand>
                            <Navbar.Toggle className="toggle-btn" aria-controls="responsive-navbar-nav" />

                            <Navbar.Collapse id="responsive-navbar-nav">

                                <nav><HashLink className="b" smooth to="/#Home">Home</HashLink></nav>

                                <nav className="b">
                                    <div class="dropdown">
                                        <nav class="dropbtn">About</nav>
                                        <div class="dropdown-content">
                                            <nav className="li"><Link className="d" smooth to="">content</Link></nav>
                                            <nav className="li"><Link className="d" smooth to="">content</Link></nav>
                                        </div>
                                    </div>

                                </nav>

                                <nav className="b">
                                    <div class="dropdown">
                                        <nav class="dropbtn">Services</nav>
                                        <div class="dropdown-content">
                                            <nav className="li"><Link className="d" smooth to="">content</Link></nav>
                                            <nav className="li"><Link className="d" smooth to="">content</Link></nav>
                                            <nav className="li"><Link className="d" smooth to="">content</Link></nav>
                                        </div>
                                    </div>

                                </nav>




                                <nav><HashLink smooth to="/#CONTACTS" className="b" >Contacts</HashLink></nav>


                                <nav className="b" onClick={() => changelan()}>
                                    {change == "en" ? <img className="arab" src={AB} alt="" /> : <img className="english" src={EN} alt="" />}
                                </nav>


                            </Navbar.Collapse>
                        </Navbar>





                    </div>











                }
            </Mycontext.Consumer>
        )
    }
}

export default headeng
