import React, { Component } from 'react'
import { Mycontext } from '../Mycontext/Context'; 



class rollarb extends Component {
    render() {
        return (
            <Mycontext.Consumer>
                {({bg})=>

                <div className="banner-area" style={{backgroundImage:bg}}>
                    <h2>"افهم أنه يومًا ما ستتمتع بالقدرة على إحداث فرق ، لذا استخدمه جيدًا"</h2>
                </div>

                
                }
            </Mycontext.Consumer>
            
           
        )
    }
}

export default rollarb
