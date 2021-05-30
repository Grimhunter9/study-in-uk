import React, { Component } from 'react'
import Inv from './invite.jpg';
import {Mycontext } from '../Mycontext/Context';







 class invarb extends Component {
    render() {
        return (
            <Mycontext.Consumer>{()=>

             <div className="inv-container">
                <img className="inv-pic" src={Inv} alt=""/>
                <div className="inv-div-arb" id="Invitation">سوف نهتم بكل شيء</div>
                <div className="inv-insure-arb">:لضمان حصولك على دعوتك  نحتاج إلى ثلاثة أشياء منك</div>

                <div className="inv-div-ul-arb" >
                    <ul className="inv-ul-arb">
                        <li className="inv-li-arb">جواز سفرك{" "}<span className="pas">*</span></li>
                        <li className="inv-li-arb">شهادة الثانوية الخاصة بك{" "}<span className="pas">*</span></li>
                        <li className="inv-li-arb">اسم الجامعة التي تختارها{" "}<span className="pas">*</span></li>
                    </ul>
                </div>
             </div>
            
            }</Mycontext.Consumer>
        
        )
    }
}

export default invarb
