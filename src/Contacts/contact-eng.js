import React, { Component } from 'react'
import Touch from './Touch.jpg';
import Facebook from './Face.jpg';
import Instagram from './Insta.jpg';
import Telegram from './Telegram.jpg';
import Whatsapp from './Wat.jpg';
import { Mycontext } from '../Mycontext/Context';



export class contactenglish extends Component {
  render() {
    return (
      <Mycontext.Consumer>{() =>

        <div className="contact" id="CONTACTS">
          <img className="touch-us" src={Touch} alt="" />

          <div className="contact-container">
            <p className="info-eng" >Get in touch</p></div>

          <div className="get-container">
            <span className="shy-eng">Dont be Shy</span>
            <br />
            <strong>
              <p className="get-eng">Feel free to ask us anything that you want. We are always open to discussions</p>
              <p className="get-eng">Contact us</p>
              <p className="get-eng"> by: {" "}</p>
              <a className="eml-eng" href="mailto:example@gmail.com">Emailing us here</a>
              <p className="get-eng">or follow us on: {" "}</p>
            </strong>
          </div>

          <div className="bar1">

            <div className="bar2">
              <a className="link" href="https://www.messenger.com/t/grim_hunter9"> <img className="fa" src={Facebook} alt="" /> </a>
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

export default contactenglish
