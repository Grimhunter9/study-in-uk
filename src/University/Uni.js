import React, { Component } from 'react'
import { Mycontext } from '../Mycontext/Context';
import Unipic from './uni.jpg';
import Uni1 from './uni1.jpg';
import Uni2 from './uni2.jpg';
import Uni3 from './uni3.jpg';
import Uni4 from './uni4.jpg';
import Uni5 from './uni5.jpg';
import Uni6 from './uni6.jpg';



class Uni extends Component {
    render() {
        return (
            <Mycontext.Consumer>{() =>
                <div className="uni-container">
                    <img className="uni-pic" src={Unipic} alt="" />
                    <div className="uni-div" id="Univer">Top well known Universities in Ukraine</div>
                    <img src={Uni1} className="uni1-pic" alt="" />
                    <p className="uni-text">V. N. Karazin Kharkiv National University</p>

                    <div>
                        <p className="uni-about">About the university:</p>
                    </div>
                    <p className="uni-about-text">V.N. Karazin Kharkiv National University is one of the oldest universities in Eastern Europe.
                    It was founded in November 1804, on the initiative of the prominent educator V.N. Karazin and in accordance with the charter of Tsar Alexander I.
                    The University has initiated the whole system of higher education of the Kharkiv Region. Its offspring are the National Academy of Law,
                    the National Pharmaceutical Academy, Kharkiv Medical University, Kharkiv Pedagogical University, the Kharkiv Veterinary Academy, the Kharkiv Academy of Culture,
                         Kharkiv Economic University and other institutions of higher education.</p>



                    <img src={Uni2} className="uni1-pic" alt="" />
                    <p className="uni-text">Taras Shevchenko National University of Kyiv</p>

                    <div>
                        <p className="uni-about">About the university:</p>
                    </div>
                    <p className="uni-about-text">
                        Taras Shevchenko National University of Kyiv ranked in the top 421-430 brackets in QS World University Rankings (Great Britain) in 2014-2015.
                        The University of Kyiv has become more proactive in the foreign citizens recruitment process.
                        At present, the number of foreign students enrolled at the University is 935.
                        The Russian and English training programs set up to enable the number of international students increase.</p>



                    <img src={Uni3} className="uni1-pic" alt="" />
                    <p className="uni-text-1">National Technical University “Kharkiv Polytechnic Institute”</p>

                    <div>
                        <p className="uni-about">About the university:</p>
                    </div>
                    <p className="uni-about-text">
                        The National Technical University «Kharkiv Polytechnic Institute» (NTU «KhPI»),
                        which was founded in 1885 is one of the oldest technical higher education institution of the Left-Bank Ukraine.
                        During its more than 130-year history the University has become an integral part of the scientific, technical,
                        intellectual and cultural history of Ukraine.The name of a Noble Prize winner L.D. Landau and the names of worldwide known scientists such as academicians N.N.
                        Beketov, P.P. Budnikov, A.K Valter, the honorary doctors D.I. Mendeleev and N.Y. Zhukovskyi as well as the name of professor V.L Kyrpychov, the founder of NTU «KhPI» and Kyiv Polytechnic, and also many other famous names are connected with the National Technical University «Kharkiv Polytechnic Institute».
                        National Technical University «Kharkiv Polytechnic Institute» is a founder of seven independent higher educational establishments, including National Aerospace University «Kharkiv Aviation Institute», Kharkiv National University of Radio Electronics, Kharkiv National University of Engineering and Architecture, National East-Ukrainian University (Luhansk), Sumy Physical and Technological Institute, Kremenchug State Polytechnic Institute and Kirovograd Institute of Agricultural Engineering.
                      </p>



                    <img src={Uni4} className="uni1-pic" alt="" />
                    <p className="uni-text-1">National Technical University of Ukraine  Kyiv Polytechnic Institute</p>

                    <div>
                        <p className="uni-about">About the university:</p>
                    </div>
                    <p className="uni-about-text">
                        It is one of the oldest world-known higher education institutions in Ukraine,
                        training highly skilled specialists in the wide range of academic fields for different economic and social sectors of Ukraine and foreign countries.
                        About 200000 professionals have been prepared within 120-year history of its existence.Training is carried out in 19 educational departments,
                        10 educational-research institutes, 13 research institutes, 17 scientific subdivisions.More than 32000 students,including foreign citizens from 27 countries study here.</p>




                    <img src={Uni5} className="uni1-pic" alt="" />
                    <p className="uni-text">Sumy State University</p>

                    <div>
                        <p className="uni-about">About the university:</p>
                    </div>
                    <p className="uni-about-text">
                        Founded in 1948 just off the picturesque Lake Chekha,
                        the Ukrainian Sumy State University ranks among the top 100 universities in the
                        emerging Europe and Central Asia region in the QS University Rankings: EECA 2016 and among the top 1000
                        universities in the QS World University Rankings® 2018.</p>



                        <img src={Uni6} className="uni1-pic" alt="" />
                    <p className="uni-text">Lviv Polytechnic National University</p>

                    <div>
                        <p className="uni-about">About the university:</p>
                    </div>
                    <p className="uni-about-text">
                    Lviv Polytechnic National University is the oldest technical higher educational institution in Ukraine and East Europe. 
                    It was founded in 1816. University consists of 16 institutes, 114 departments; autonomous, additional and general subdivisions.
                    Technical Academy was one of the first technical schools in Europe and first in Ukraine. 
                    In 1877 the academy was renamed on High Polytechnic School and was included as higher technical educational institution of the Austro-Hungarian Empire. 
                    That new academical year was started in new building located on S. Bandery Str. Since 1921 to 1939 academical institution was called Lviv Polytechnic.
                    After Soviet Power in 1939 it was renamed on Lviv Polytechnic Institut. In June 1993, the year before its 150 anniversary, Lviv Polytechnic Institute get the highest IV accreditation level, 
                    university status and name “ Lviv Polytechnic State University”. In 2000 Lviv Polytechnic got National University status . 8 July 2009 the Cabinet of Ministers of Ukraine on their meeting designated Lviv Polytechnic National University as a self-management research higher educational institution.</p>



                </div>
            }</Mycontext.Consumer>

        )
    }
}

export default Uni;
