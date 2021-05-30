import React, { Component } from 'react';
import Mycontext from '../Mycontext/Context';
import Vis from './visa.jpg';





class Visaarb extends Component {
    render() {
        return (
            <Mycontext.Consumer>{() =>
                <div className="visa-container">
                    <img className="visa-pic" src={Vis} alt="" />
                    <div className="visa-div-arb" id="Visa">لا تقلق</div>
                    <div className="visa-text-arb">
                    سنخبرك بالأوراق التي تحتاج إلى أخذها معك ، ونخبرك بأفضل وقت للتقدم بطلب للحصول على التأشيرة ،
                         بالنسبة للتوقيت ، سنخبرك بموعد المقابله في السفارة ، لذلك لا داعي للقلق
                     حول هذه الأشياء 
                      

            </div>

                </div>


            }</Mycontext.Consumer>

        )
    }
}

export default Visaarb
