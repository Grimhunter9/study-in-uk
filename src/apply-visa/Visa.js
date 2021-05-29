import React, { Component } from 'react';
import Mycontext from '../Mycontext/Context';
import Vis from './visa.jpg'





class Visa extends Component {
    render() {
        return (
            <Mycontext.Consumer>{() =>
                <div className="visa-container">
                    <img className="visa-pic" src={Vis} alt="" />
                    <div className="visa-div">Don't worry</div>
                    <div className="visa-text">
                        We will tell you what papers you need to take with you, and telling you the best time to apply for the visa,
                        as for timing we will inform you when the appointment will happen in the embassy, so you dont need to worry
                        about those things, we got you covered 

                </div>

                </div>


            }</Mycontext.Consumer>

        )
    }
}

export default Visa
