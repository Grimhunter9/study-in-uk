import React, { Component } from 'react';
import { Mycontext } from '../Mycontext/Context';
import Air from './airport.jpg';





class pick extends Component {
    render() {
        return (
            <Mycontext.Consumer>{() =>
                <div className="pick-container">
                    <img className="pick-pic" src={Air} alt=""/>
                    <div className="pick-div" id="pickup">Serving you would be our pleasure</div>
                    <div className="pick-text">
                         Our services include also a pick from the airport, and ensuring that 
                         evreything is to your liking
                    </div>

                </div>
            }</Mycontext.Consumer>

        )
    }
}

export default pick
