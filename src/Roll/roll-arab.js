import React, { Component } from 'react'
import { Mycontext } from '../Mycontext/Context'; 
import Un from './m.jpg';
import Test2 from './uni.jpg';
import Ver from './ver.jpg'
import Ju from './ju.jpg';


class rollarb extends Component {
    render() {
        return (
            <Mycontext.Consumer>
                {({back})=>

                <div>

                <div class="banner-area" /*style={{ backgroundImage: back == "1" ? `url(${Un})` : `url(${Ver})` }}*/>
                    <h2>"افهم أنه يومًا ما ستتمتع بالقدرة على إحداث فرق ، لذا استخدمه جيدًا"</h2>
                </div>

                </div>
                }
            </Mycontext.Consumer>
            
           
        )
    }
}

export default rollarb
