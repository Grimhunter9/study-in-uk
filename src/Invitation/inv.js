import React, { Component } from 'react'
import Inv from './invite.jpg';
import {Mycontext } from '../Mycontext/Context';






 class inv extends Component {
    render() {
        return (
            <Mycontext.Consumer>{()=>

             <div className="inv-container">
                <img className="inv-pic" src={Inv} alt=""/>
             </div>
            
            }</Mycontext.Consumer>
        
        )
    }
}

export default inv
