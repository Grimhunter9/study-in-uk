import React, { Component } from 'react'
import Life from './life.jpg';
import Money from './money.jpg';
import Study from './study.jpg';
import Safe from './safe.jpg';
import { Mycontext } from '../Mycontext/Context';









class live extends Component {
    render() {
        return (
            <Mycontext.Consumer>{() =>

                <div className="live-container">
                    <img className="life-pic" src={Life} alt="" />

                    <div className="life-div" id="Live-ua">Living in Ukraine</div>

                    <div>
                        <p className="life-text">Life:</p>
                    </div>

                    <p className="life-about">
                      Ukraine is a country in the European continent situated in Eastern Europe with Kyiv as its capital.
                      They have extensive farmlands with fertile soils and are one of the largest grain exporters in the world.
                      The country has Poland, Slovakia, and Hungary as its borders to the west, Russia to the east and north-east, 
                      Belarus to the north, and Romania, Moldova, Crimea, and the Black Sea to the South.
                      The Soviet Union’s insistence on educating all of the country’s citizens,
                      they have a literacy rate of 99.97% which is also why the educational sector is equally good for both the citizens of the country and for international students.
                      Ukraine produces Europe’s fourth-largest number of postgraduate students which makes Ukraine one of the highly educated countries on the continent. 
                        
                    </p>


                    <img className="life-pic" src={Money} alt="" />


                    <div>
                        <p className="life-text2">Living Expense:</p>
                    </div>

                    <p className="life-about">

                     Understanding the living expenses is mandatory before applying for the courses in Ukraine since the expenses,
                     though is relatively cheap when compared to other European countries, can still be a substantial amount for students coming from different parts of the world.
                     It is mandatory in this country to show proof of financial solvency while applying for a visa. The cost of living is often a description of the university the student has enrolled in and the kind of lifestyle they lead.
                   
                    </p>



                    <img className="life-pic" src={Study} alt="" />

                    <div>
                        <p className="life-text3">Choosing a Course to Study:</p>
                    </div>

                    <p className="life-about">

                    Ukraine is a country known for its tolerance and hospitable nature. International students in Ukraine can easily assimilate and integrate into the local culture. The educational system in place in the country is standardized making it easier for international students to understand and excel in them.
                    Students can choose from different fields of study since each field has a few many courses and subjects enlisted by universities. This includes engineering, medicine, technical, and legal education courses. Irrespective of the courses one chooses, they will receive the best education available which meets almost all the job requirements in European countries and can easily provide students with employment opportunities. 
                    The educational institutions in Ukraine follow the Bologna reform which provides a unified and internationally recognized degree.
                    </p>


                    <img className="life-pic" src={Safe} alt="" /> 

                    <div>
                        <p className="life-text4">Safety Concerns for International Students:</p>
                    </div>

                    <p className="life-about">

                    Ukraine, being the tolerant country it is, is safe for both natives and international students alike. 
                    Safety measures have been put into place by the government for students from the time they enter the country and throughout their stay until they leave. The best-ranked cities for safety are Kyiv, Kharkiv, Odesa, and Lviv. 
                    The Official Ukrainian Admission center which was recently put into place has made the country better for international students as a whole.
                   
                    </p>

                </div>





            }</Mycontext.Consumer>

        )
    }
}

export default live
