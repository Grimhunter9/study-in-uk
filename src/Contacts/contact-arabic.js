import React, { Component } from 'react'
import Touch from './Touch.jpg';
import Facebook from './Face.jpg';
import Instagram from './Insta.jpg';
import Telegram from './Telegram.jpg';
import Whatsapp from './Wat.jpg';
import { Mycontext } from '../Mycontext/Context';
import { HashLink } from 'react-router-hash-link';


export class contactarabic extends Component {
    render() {
        return (
            <Mycontext.Consumer>{() =>

                <div className="contact" id="CONTACTS">
                    <img className="touch-us" src={Touch} alt="" />

                    <div className="contact-container">
                        <p className="info-arb" >ابقى على تواصل</p></div>

                    <div className="get-container">
                        <span className="shy-arb">لا تكن خجولا</span>
                        <br />
                        <strong>
                            <p className="get-arb">لا تتردد في سؤالنا عن أي شيء تريده. نحن دائما منفتحون الى المناقشات</p>
                            <p className="get-arb2">تواصل معنا   </p>
                            <p className="get-arb3"> :عبر {" "}</p>
                            <a className="eml-arb" href="mailto:tbestfuture01@gmail.com">مراسلتنا عبر البريد الإلكتروني هنا</a>
                            <p className="get-arb3-link"> : ناقشنا {" "}</p>
                            <button className="button-consolt-arb"><HashLink className="hash-consolt-arb" smooth to="/Consoltation#Consoltation">اضغط هنا</HashLink></button>
                         
                            <p className="get-arb4">:أو تابعنا{" "}</p>
                        </strong>
                    </div>

                    <div className="bar1">

                        <div className="bar2-arb">
                            <a className="link" href="https://www.messenger.com/t/"> <img className="fa" src={Facebook} alt="" /> </a>
                            <a className="link" href="http://www.instagram.com/best_future_europ"> <img className="in" src={Instagram} alt="" /> </a>
                            <a className="link" href="https://telegram.me/Bestfutre"> <img className="tl" src={Telegram} alt="" /> </a>
                            <a className="link" href="https://wa.me/+380960498331"> <img className="wp" src={Whatsapp} alt="" /> </a>
                        </div>




                    </div>

                </div>





            }</Mycontext.Consumer>

        )
    }
}

export default contactarabic
