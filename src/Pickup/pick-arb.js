import React, { Component } from 'react';
import { Mycontext } from '../Mycontext/Context';
import Air from './airport.jpg';





class pickarb extends Component {
    render() {
        return (
            <Mycontext.Consumer>{() =>
                <div className="pick-container">
                    <img className="pick-pic" src={Air} alt=""/>
                    <div className="pick-div-arb" id="pickup">خدمتنا لك ستكون من دواعي سرورنا</div>
                    <div className="pick-text-arb">تشمل خدماتنا أيضًا استقبالك من المطار  واصطحابك  الى السكن الجامعي ، والتأكد من أن كل شيء على رضاك
                    </div>

                </div>
            }</Mycontext.Consumer>

        )
    }
}

export default pickarb
