import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Mycontext } from '../Mycontext/Context';
import EN from './eng.jpg';
import AB from './arab.jpg';

import Logo from './best.jpg';






class headeng extends Component {

    render() {
        return (

            <Mycontext.Consumer>
                {({ change, changelan, Bg1, Bg2, Bg3, Bg4, Bg5, Bg6, Bg7 }) =>

                    <div>
                        <Navbar className="header" collapseOnSelect expand="lg">

                            <Navbar.Brand><img src={Logo} className="log" alt="my-logo" /></Navbar.Brand>
                            <Navbar.Toggle className="toggle-btn" aria-controls="responsive-navbar-nav" />

                            <Navbar.Collapse id="responsive-navbar-nav">

                                <nav><HashLink className="b" onClick={() => Bg1()} smooth to="/">Home</HashLink></nav>

                                <nav className="b">
                                    <div class="dropdown">
                                        <nav class="dropbtn">About</nav>
                                        <div class="dropdown-content">
                                            <nav className="li"><HashLink onClick={() => Bg2()} className="d" smooth to="/Univer#Univer">Universities</HashLink></nav>
                                            <nav className="li"><HashLink onClick={() => Bg3()} className="d" smooth to="/Live-ua#Live-ua">Life in Ua</HashLink></nav>
                                        </div>
                                    </div>

                                </nav>

                                <nav className="b">
                                    <div class="dropdown">
                                        <nav class="dropbtn">Services</nav>
                                        <div class="dropdown-content">
                                            <nav className="li"><HashLink onClick={() => Bg4()} className="d" smooth to="/Consoltation#Consoltation">Consoltation</HashLink></nav>
                                            <nav className="li"><HashLink onClick={() => Bg5()} className="d" smooth to="/Invitation#Invitation">Invitation</HashLink></nav>
                                            <nav className="li"><HashLink onClick={() => Bg6()} className="d" smooth to="/Visa#Visa">Visa-apply</HashLink></nav>
                                            <nav className="li"><HashLink onClick={() => Bg7()} className="d" smooth to="/pickup#pickup">Airport pick up</HashLink></nav>
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
