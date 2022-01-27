import React from 'react';
import './About.css' ;
import about1 from '../About/about1.jpg' ;
import about2 from '../About/about2.jpg' ;
import about3 from '../About/about3.jpg' ;
const About = () => {
    return (
        <div>
            <h1 id="about" className="mb-4 mt-5"> Why Us?  </h1>
            <div className="about-info mt-5 row ">
                    <div className="col-lg-4">
                        <img className="about-img shadow-lg" src={about1} alt="" />
                        <h3 className="mt-3">The Best Service
                            </h3>
 
                    </div>
                    <div className="col-lg-4">
                        <img className="about-img shadow-lg " src={about2} alt="" />
                        <h3 className="mt-3">Everything is Included

                            </h3>
                    </div>
                    <div className="col-lg-4">
                        <img className="about-img shadow-lg" src={about3} alt="" />
                        <h3 className="mt-3">Best Prices
 
                            </h3>
                    </div>
            <h3>  </h3> 
            </div>

        </div>
    );
};

export default About;