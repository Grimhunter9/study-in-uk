import React, { Component } from 'react'
import Final from './best.jpg';
import { Mycontext } from '../Mycontext/Context';



class end extends Component {
    render() {
        return (
            <Mycontext.Consumer>{() =>
                <div className="end-body">
                    <div>
                        <img className="end-logo" src={Final} alt="" />
                    </div>

                    <div className="end-text"> ©  All Rights Reserved Terms of Use and Privacy Policy </div>

                </div>
            }</Mycontext.Consumer>

        )
    }
}

export default end

