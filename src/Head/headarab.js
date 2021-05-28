import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Mycontext } from '../Mycontext/Context';
import EN from './eng.jpg';
import AB from './arab.jpg';

import Logo from './best.jpg';



class headarab extends Component {

    render() {
        return (

            <Mycontext.Consumer>
                {({ change, changelan, Bg }) =>
                    <div>
                        <Navbar className="header" collapseOnSelect expand="lg">
                            <Navbar.Brand><HashLink><img src={Logo} className="log" alt="my-logo" /></HashLink></Navbar.Brand>
                            <Navbar.Toggle className="toggle-btn" aria-controls="responsive-navbar-nav" />

                            <Navbar.Collapse id="responsive-navbar-nav">

                                <nav><HashLink className="b" onClick={() => Bg()} smooth to="/#Home">الرئيسية</HashLink></nav>

                                <nav className="b">
                                    <div class="dropdown">
                                        <nav class="dropbtn" smooth to="">حول</nav>
                                        <div class="dropdown-content">
                                            <nav onClick={() => Bg()} className="li"><HashLink className="d" smooth to="/Univer">الجامعات</HashLink></nav>
                                            <nav className="li"><HashLink className="d" smooth to="/Live-ua">المعيشة</HashLink></nav>

                                        </div>
                                    </div>

                                </nav>

                                <nav className="b">
                                    <div class="dropdown">
                                        <nav class="dropbtn">خدمات</nav>
                                        <div class="dropdown-content">
                                            <nav className="li"><HashLink className="d" smooth to="/Consoltation">المشاورات</HashLink></nav>
                                            <nav className="li"><HashLink className="d" smooth to="/Invitation">رسالة دعوة</HashLink></nav>
                                            <nav className="li"><HashLink className="d" smooth to="/Visa">تأشيرة دخول</HashLink></nav>
                                            <nav className="li"><HashLink className="d" smooth to="/pickup">استلام من المطار</HashLink></nav>
                                        </div>
                                    </div>

                                </nav>




                                <nav><HashLink smooth to="/#CONTACTS" className="b" >جهات الاتصال</HashLink></nav>

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

export default headarab
