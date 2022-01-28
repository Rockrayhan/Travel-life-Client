import React from 'react';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import './Home.css';
import Contact from '../Contact/Contact';
import About from '../About/About';
import kuakata from '../../images/kuakata.jpg'
import bandarban from '../../images/bandarban.jpg'
import nikli from '../../images/nikli.jpg'
import { Carousel } from 'react-bootstrap';
import Blogs from '../Blogs/Blogs';
const Home = () => {
    return (
        <div>

 {/*================= banner ============== */}

            <div id="home" className="container mb-5">
                <div className="row">
                    <div className="col-lg-4">
                        <h1>
                            <span> Have a journey With</span> <br />  <span className="banner-header-main text-success">Travel Life</span> </h1>
                        <p className="mt-5">Travel Life is one of the most respected and successful name in the global travel industry, with a long and rich company heritage spanning 30 years. The definitive resource for global travel content, its reputation has been built on journalistic credibility. Travel Life is dedicated to the provision of objective, accurate, informative and reliable travel content in various formats, including the World Travel Guide for consumers, our travel industry professionals and extensive licensed and bespoke content for commercial partners through its specialist division, Columbus Content Solutions.</p>
                        <button className="btn btn-success p-3 mt-2 rounded"> Lets's Travel </button>
                    </div>
                    <div className="col-lg-8">
                        {/* <img className="img-fluid banner-img" src={banner1} alt="" /> */}

                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={kuakata}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Kuakata</h3>
                                    
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={nikli}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Nikli</h3>
                                    
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={bandarban}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Bandarban</h3>
                                    
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

                {/*================= banner END ============== */}

                {/* <Services> </Services> */}
               
                <Blogs></Blogs>
                
                <Contact> </Contact>
                <About> </About>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;