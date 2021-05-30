import React, { Component } from 'react'
import Co from './console.jpg';
import { HashLink } from 'react-router-hash-link';
import { Mycontext } from '../Mycontext/Context';







class Consol extends Component {
    render() {
        return (
            <Mycontext.Consumer>{() =>


                <div className="consolt-container">
                    <img className="consolt-pic" src={Co} alt="" />
                    

                    <div className="consolt-div-ab" id="Consoltation">أسألنا أي شيء</div>

                    <div className="consolt-enter-ab">أدخل معلوماتك في النموذج أدناه</div>
                    

                    <div className="consolt-form-arb">

                        <form action="">

                        <input className="consolt-info" type={Text} name="name"  required  placeholder="...أدخل أسمك"></input>
                            <input className="consolt-info" type={Text} name="email" required  placeholder="...أدخل بريدك الإلكتروني"></input>
                             <textarea className="consolt-touch"type={Text} name="body"  required  placeholder="...اسأل هنا" ></textarea>
                             <button  class="pageclip-form__submit-ab" type="submit" >
                             <span className="spa-arb">إرسال</span>
                            </button>
                        </form>
                    </div>

                    <div className="consolt-or-ab">
                            <p>:أو يمكنك </p> 
                    </div>

                   <div className="consolt-div-button">  

                    <button className="consolt-button-ab">
                            <HashLink className="consolt-hash" smooth to="/#CONTACTS">الاتصال بنا هنا</HashLink>
                    </button>

                   </div>
                      

                








                </div>
            }</Mycontext.Consumer>

        )
    }
}

export default Consol;
