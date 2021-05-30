import React, { Component } from 'react'
import { Mycontext } from '../Mycontext/Context';


export class roll extends Component {
    render() {
        return (
         <Mycontext.Consumer>{({bg}) =>
                   
                     
                    <div className="banner-area" style={{backgroundImage:bg}}> 
    
                    <h2>"Understand that one day you will have the power to make a difference, so use it well."</h2>
                        
                    </div>
    

                }</Mycontext.Consumer>
        )
    }
}

export default roll
