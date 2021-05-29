import React, { Component } from 'react'
import Final from './best.jpg';
import { Mycontext } from '../Mycontext/Context';




class endarb extends Component {
    render() {
        return (
            <Mycontext.Consumer>{() => 
            
            <div className="end-body">
                <div>
                    <img className="end-logo-arb" src={Final} alt="" />
                </div>

                <div className="end-text">  جميع الحقوق محفوظة شروط الاستخدام وسياسة الخصوصية ©  </div>

            </div>}</Mycontext.Consumer>

        )
    }
}

export default endarb

