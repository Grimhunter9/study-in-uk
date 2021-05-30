import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Henglish from './Head/headeng';
import Harabic from './Head/headarab';

import Roll from './Roll/roll';
import Rollarb from './Roll/roll-arab';


import Whyenglish from './Why/whyenglish';
import Whyarab from './Why/whyarab';



import Coneng from './Contacts/contact-eng';
import Conarb from './Contacts/contact-arabic';


import End from './End/end';
import Endarb from './End/end-arb';


import Uni from './University/Uni';
import Uniarb from './University/uni-arab';


import Live from './Live-ua/live';
import Livearb from './Live-ua/live-arb';


import Consol from './Consoltation/Consol';
import Consolarb from './Consoltation/Consol-arb';


import Invite from './Invitation/inv';
import Invitearb from './Invitation/inv-arb';


import Visa from './apply-visa/Visa';
import Visaarb from './apply-visa/Visa-arb';


import Pickup from './Pickup/pick';
import Pickuparb from './Pickup/pick-arb';



import { Mycontext } from './Mycontext/Context';

import page1 from './Roll/m.jpg';
import page2 from './Roll/ver.jpg';
import page3 from './Roll/live.jpg';
import page4 from './Roll/consolt.jpg';
import page5 from './Roll/invitation.jpg';
import page6 from './Roll/vis.jpg';
import page7 from './Roll/air.jpg';








/*******************************************/
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Head/head.css';
import './Roll/roll.css';
import './Why/why.css';
import './Contacts/contact.css';
import './End/end.css';
import './University/Uni.css';
import './Live-ua/live.css';
import './Consoltation/Consol.css';
import './Invitation/inv.css';
import './apply-visa/Visa.css';
import './Pickup/pick.css';





class App extends Component {


  state = {
    change: "en",
    bg: "",


  }

  changelan = () => {
    this.setState({
      change: this.state.change === "en" ? "ab" : "en",

    })
  }

  Bg1 = () => {
    this.setState({
      bg: `url(${page1})`
    })
  }

  Bg2 = () => {
    this.setState({
      bg: `url(${page2})`
    })
  }


  Bg3 = () => {
    this.setState({
      bg: `url(${page3})`
    })
  }

  Bg4 = () => {
    this.setState({
      bg: `url(${page4})`
    })
  }

  Bg5 = () => {
    this.setState({
      bg: `url(${page5})`
    })
  }

  Bg6 = () => {
    this.setState({
      bg: `url(${page6})`
    })
  }

  Bg7 = () => {
    this.setState({
      bg: `url(${page7})`
    })
  }







  render() {

    return (
      <Mycontext.Provider value={{
        change: this.state.change, changelan: this.changelan, bg: this.state.bg,
        Bg1: this.Bg1,
        Bg2: this.Bg2,
        Bg3: this.Bg3,
        Bg4: this.Bg4,
        Bg5: this.Bg5,
        Bg6: this.Bg6,
        Bg7: this.Bg7,
      }}>

        <Router>

          <div id="Home">


            <div>{this.state.change == "en" ? <Henglish /> : <Harabic />}</div>

           <div>{this.state.change == "en" ? <Roll /> : <Rollarb />}</div>




            <div class="content-area">
              <switch>

                <Route exact path="/">


                  <div>{this.state.change == "en" ? <Whyenglish /> : <Whyarab />}</div>

                 <div  >{this.state.change == "en" ? <Coneng /> : <Conarb />}</div>

                  <div id="CONTACTS"></div>

    <div>{this.state.change == "en" ? <End /> : <Endarb />}</div>


                </Route>



                 <Route exact path="/Univer">


                  <div>{this.state.change == "en" ? <Uni /> : <Uniarb />}</div>

                  <div>{this.state.change == "en" ? <End /> : <Endarb />}</div>


                </Route>




                <Route exact path="/Live-ua">


                  <div>{this.state.change == "en" ? <Live /> : <Livearb />}</div>


                  <div>{this.state.change == "en" ? <End /> : <Endarb />}</div>


                </Route>



               <Route exact path="/Consoltation">


                  <div>{this.state.change == "en" ? <Consol /> : <Consolarb />}</div>

                  <div>{this.state.change == "en" ? <End /> : <Endarb />}</div>



                </Route>



                <Route exact path="/Invitation">


                  <div>{this.state.change == "en" ? <Invite /> : <Invitearb />}</div>

                  <div>{this.state.change == "en" ? <End /> : <Endarb />}</div>


                </Route>




                <Route exact path="/Visa">


                  <div>{this.state.change == "en" ? <Visa /> : <Visaarb />}</div>

                  <div>{this.state.change == "en" ? <End /> : <Endarb />}</div>


                </Route>


                <Route exact path="/pickup">




                  <div>{this.state.change == "en" ? <Pickup /> : <Pickuparb />}</div>


                  <div>{this.state.change == "en" ? <End /> : <Endarb />}</div>



                </Route>




              </switch>

           </div>

          </div>

        </Router>
      </Mycontext.Provider>
    )
  }
}

export default App


