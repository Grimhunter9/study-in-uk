import React, { Component } from 'react'
import Inv from './invite.jpg';
import {Mycontext } from '../Mycontext/Context';






 class inv extends Component {
    render() {
        return (
            <Mycontext.Consumer>{()=>

             <div className="inv-container">
                <img className="inv-pic" src={Inv} alt=""/>
                <div className="inv-div" id="Invitation">We will take care of everything</div>
                <div className="inv-insure">Insuring that you have your invitation we need three things from you:</div>

                <div className="inv-div-ul" >
                    <ul className="inv-ul">
                        <li className="inv-li"><span className="pas">*</span>{" "}Your passport</li>
                        <li className="inv-li"><span className="pas">*</span>{" "}Your highschool certificate</li>
                        <li className="inv-li"><span className="pas">*</span>{" "}The name of the university that you choose</li>
                    </ul>
                </div>
             </div>
            
            }</Mycontext.Consumer>
        
        )
    }
}

export default inv
