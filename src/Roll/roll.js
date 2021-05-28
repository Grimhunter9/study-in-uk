import React, { Component } from 'react'
import { Mycontext } from '../Mycontext/Context';
import Un from './m.jpg';
import Test2 from './uni.jpg';
import Ver from './ver.jpg'
import Ju from './ju.jpg';


class roll extends Component {
    render() {
        return (

            <Mycontext.Consumer>{({ back }) =>

                <div>

                    <div class="banner-area"

                        style={{ backgroundImage: back == "1" ? `url(${Un})` : `url(${Ver})` }}>

                        <h2>"Understand that one day you will have the power to make a difference, so use it well."</h2>
                    </div>

                </div>



            }</Mycontext.Consumer>


        )
    }
}

export default roll
