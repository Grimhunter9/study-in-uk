import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Henglish from './Head/headeng';
import Harabic from './Head/headarab';

import Roll from './Roll/roll';

import Whyenglish from './Why/whyenglish';
import Whyarab from './Why/whyarab';


import Coneng from './Contacts/contact-eng';
import Conarb from './Contacts/contact-arabic';

import { Mycontext } from './Mycontext/Context';
import End from './End/end';



/*******************************************/
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Head/head.css';
import './Roll/roll.css';
import './Why/why.css';
import './Contacts/contact.css'




class App extends Component {


  state = {
    change: "en",
  }

  changelan = () => {
    this.setState({
      change: this.state.change === "en" ? "ab" : "en",

    })
  }


  render() {
    return (
      <Mycontext.Provider value={{ change: this.state.change, changelan: this.changelan }}>

        <Router>

          <div id="Home">


            <div>{this.state.change == "en" ? <Henglish /> : <Harabic />}</div>

            <Roll />

            <div class="content-area">

              <switch>

                <Route exact path="/">


                  <div>{this.state.change == "en" ? <Whyenglish /> : <Whyarab />}</div>

                  <div>{this.state.change == "en" ? <Coneng /> : <Conarb />}</div>

                  <End/>






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


