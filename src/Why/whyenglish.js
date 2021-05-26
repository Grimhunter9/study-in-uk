import React, { Component } from 'react'
import Flag from './flag.jpg';
import { Mycontext } from '../Mycontext/Context';

class Whyenglish extends Component {
    render() {
        return (
            <Mycontext.Consumer>{() =>

                <div className="why-container">
                    <img src={Flag} className="flag" alt="" />
                    <div className="why-div-english">
                        Why study in Ukraine?
            </div>

                    <div className="why-text-english">

                        <span className="span-english"><strong>1)Quality of education for all international students</strong></span>

Ukrainian universities are characterized by high-quality education.

The courses are internationally recognized in Europe, the United Kingdom, the United States, Asia, Africa, the World Health Organization, UNESCO, the European Council, etc..

This makes the diploma obtained from a Ukrainian university excellent everywhere in the world.



<span className="span-english"><strong>2)Low Tuition Fees</strong></span>

Tuition fees in Ukrainian higher education institutions are much lower than in European and North American universities.

Moreover, Ukraine offers the possibility of Paying tuition fees upon arrival.

Indeed, many students do not want to pay before arrival, in Ukraine, you can do so.

You definitely have to pay for the invitation letter and the services the agency provides if you use it,

but in all cases, all the money you have to pay will only be paid after arriving in Ukraine. Your money is then safe.



<span className="span-english"><strong>3)European life Standards</strong></span>

Ukraine is located in central and eastern Europe and is the largest country in Europe. Ukraine has European life standards at low prices. Thus, this country is a good place for a professional start.

The conditions for entering Ukraine are also very flexible for foreigners.




<span className="span-english"><strong>4)Enriching the Experience</strong></span>

A large number of universities have a partnership with the USA, Canada, and European universities, making it your opportunity to meet famous professors all over the world with the lowest tuition fees.

Moreover, Ukrainian universities offer their students accommodation in inexpensive bedrooms.




<span className="span-english"><strong>5)Ease of registration in Ukrainian universities</strong></span>

international students do not need to pass any registration exams at a Ukrainian university. TOEFL or IELTS is not mandatory either.








            </div>

                </div>

            }
            </Mycontext.Consumer>



        )
    }
}

export default Whyenglish
