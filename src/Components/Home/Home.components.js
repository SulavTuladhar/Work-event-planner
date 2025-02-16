import React, { Component } from 'react';
import { HeaderComponents } from '../Header/Header.components';
import './Home.components.css';

// Importing Third party Libary
import { motion } from 'framer-motion'; // animation libary 
import { Carousel } from 'react-responsive-carousel'; // React responsive caraousel

// Importing third party CSS
import "react-responsive-carousel/lib/styles/carousel.min.css"; // // React responsive caraosel CSS

export class HomeComponents extends Component {
 
    render(){
        const variants = {
            visible: {opacity: 1, y: 0},
            hidden: { opacity: 0, y: 40}
        }
        return(
            <div>
                <HeaderComponents />

                {/* Hero-container */}
                <div className='hero-container d-flex'>
                    <motion.div 
                        initial= "hidden"
                        animate="visible"
                        transition={{ease: 'easeOut', duration: 2}}
                        variants={variants}
                        className='container small-hero-container'
                        >
                            <h1> Event Planner </h1>
                            <h4> Let's Plan Your Next Event Together </h4>
                            <div className='contact-button'> 
                                    <h5> Contact </h5>
                            </div>
                    </motion.div>
                </div>

                {/* About Us Page */}
                <div className='about-us-page mt-5 mb-5' id='about-us'>
                    <div className='container p-5'>
                        <h1 className='text-center mb-5'> About Us </h1>
                        <div className='row row-cols-2'>
                            <div className='col-xl-6 col-12  mb-5'>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                             <div className='col-xl-6 col-12'>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </div>
                       </div>
                </div>


                {/* Services Page */}
                <div className='services-page d-flex align-items-center pb-5 pt-5' id='services'>

                    <div className='container'>
                {/* Row start */}
                        <div className='row g-4'>

                            <div className='col-md-6 col-lg-3'>
                                <div className='card border-0'>
                                    <div className='card-body text-center'>
                                        <img src='./images/birthday.jpg' alt='birthday-img' className='img-thumbnail' /> 
                                        <h3> Birthday </h3>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 col-lg-3'>
                                <div className='card border-0'>
                                    <div className='card-body text-center'>
                                        <img src='./images/event.jpg' alt='event-img' className='img-thumbnail' /> 
                                        <h3> Event </h3>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 col-lg-3'>
                                <div className='card border-0'>
                                    <div className='card-body text-center'>
                                        <img src='./images/wedding.jpg' alt='wedding-img' className='img-thumbnail' /> 
                                        <h3> Weddings </h3>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 col-lg-3'>
                                <div className='card border-0'>
                                    <div className='card-body text-center'>
                                        <img src='./images/chrismas.jpg' alt='festival-img' className='img-thumbnail' /> 
                                        <h3> Festival </h3>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    </div>
                                </div>
                            </div>
                            {/* Row end */}
                        </div>

                    </div>

                </div>



    {/* Description Page */}        
    <div className='description-page mt-5 mb-5'>
        <div className='container pb-5'>
            <div className='row'>

            {/* Right Container */}
                <div className='
                    col-xl-5 col-sm-12
                    d-flex
                    justify-content-center
                    align-items-center
                    text-center
                    text-sm-start
                    align-items-sm-start
                    flex-column
                    pe-sm-5
                    pe-2
                '>
                        <h1> We Make Dreams <br /> Come True! </h1>
                            <p> 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat 
                            </p>
                            <div className='contact-btn'> <h6> Contact </h6> </div>

                </div>
                {/* Right container end  */}

                {/* Left container start */}
                <div className='
                                col-xl-7 col-sm-12
                                d-flex
                                justify-container-center
                                align-items-center
                                flex-column
                '>

                    <div className='right-container mt-5 col-sm-12'>
                        <div className='row row-cols-2 feature'>

                            <div className='d-flex flex-column feature-content mt-2 '>
                                <div className='small-logo' >
                                    <img src='./images/wand.svg' alt='wand-svg' className='img-thumbnail svg' />
                                </div>
                                    <h4> Decoration </h4>
                                        <p>
                                             Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit. 
                                        </p>
                        </div>

                        <div className='d-flex flex-column feature-content mt-2'>
                            <div className='small-logo' >
                                <img src='./images/sppon.svg' alt='spoon-svg' className='img-thumbnail svg' />
                                </div>
                                <h4> Chatering </h4>
                                <p>
                                    Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. 
                                </p>
                        </div>

                    </div>
                    {/* Second row */}
                    <div className='row row-cols-2 feature'>
                        <div className='d-flex flex-column feature-content mt-2'>
                            <div className='small-logo' >
                                <img src='./images/camera.svg' alt='camera-svg' className='img-thumbnail svg' />
                            </div>
                                <h4> Photo </h4>
                                <p>
                                    Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. 
                                </p>
                        </div>

                        <div className='d-flex flex-column feature-content mt-2'>
                            <div className='small-logo' >
                                <img src='./images/mic.svg' alt='mic-svg' className='img-thumbnail svg' />
                            </div>
                                <h4> Entertainment </h4>
                                <p>
                                    Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. 
                                </p>
                        </div>
                    </div>
                </div>

                </div>
                {/* Left container end */}
            </div>


        </div>

    </div>
          
                {/* Quotes Page */}
            <div className='quotes-page'> 
                <div className='container image-side'>
                    <img src='./images/event-img.jpg' alt='table-img' className='img-thumbnail' />
                    <img src='./images/event-img1.jpg' alt='table-img1' className='second-img img-thumbnail' />
                </div>
                <div className='container quote-side'> 
                    <h1> You Deserve <br /> The Art of <br /> Perfection </h1> 
                </div>
            </div>



            {/* Pricing page */}
            <div className='pricing-page mt-5 pt-5' id="pricing">
                <div className='container'>
                <h1 className='text-center mb-4'> Pricing </h1>
                <p className='text-center'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
                </div>
            <div className='container mt-5 mb-5'>
                <div className='row pt-5'>

                    {/* First columnn */}
                    <div className='col-xl-3 col-sm-12 mb-5'>
                    <div className='card border-here'>
                        <div className='card-body d-flex flex-column align-items-center'>
                        <h1 className='pricing-h1'> birthday </h1>
                        <h1> 100$ </h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Duis aute irure dolor in </p> </span>
                        <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Sint occaecat cupidatat </p> </span>
                        <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Sunt in culpa qui officia </p> </span>
                        <span className='book-now'> <h6> Book now &#8594; </h6> </span>
                    
                        </div>
                        </div>
                    </div>
                    {/* Second comlumn */}
                    <div className='col-xl-3 col-sm-12 mb-5'>
                    <div className='card border-here'>
                        <div className='card-body d-flex flex-column align-items-center'>
                        <h1 className='pricing-h1'> Event </h1>
                        <h1> 200$ </h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Duis aute irure dolor in </p> </span>
                        <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Sint occaecat cupidatat </p> </span>
                        <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Sunt in culpa qui officia </p> </span>
                        <span className='book-now'> <h6> Book now &#8594; </h6> </span>
                    
                        </div>
                        </div>
                    </div>
                    {/* Third column */}
                    <div className='col-xl-3 col-sm-12 mb-5'>
                    <div className='card border-here'>
                        <div className='card-body d-flex flex-column align-items-center'>
                        <h1 className='pricing-h1'> Weddings </h1>
                        <h1> 900$ </h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Duis aute irure dolor in </p> </span>
                        <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Sint occaecat cupidatat </p> </span>
                        <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Sunt in culpa qui officia </p> </span>
                        <span className='book-now'> <h6> Book now &#8594; </h6> </span>
                    
                        </div>
                        </div>
                    </div>
                    {/* Fourth Column */}
                    <div className='col-xl-3 col-sm-12 mb-5 '>
                    <div className='card border-here'>
                        <div className='card-body d-flex flex-column align-items-center'>
                        <h1 className='pricing-h1'> Festival </h1>
                        <h1> 600$ </h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Duis aute irure dolor in </p> </span>
                        <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Sint occaecat cupidatat </p> </span>
                        <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Sunt in culpa qui officia </p> </span>
                        <span className='book-now'> <h6> Book now &#8594; </h6> </span>
                        </div>
                        </div>
                    </div>
                    {/* Columns End */}

                </div>
            </div>
            </div>

            {/* Testimonials */}
            <div className='container-fluid testimonials-page'>
            
            <h1> Testimonials </h1>

            <Carousel className='container  testimonials-wrapper'>
                <div className=' testimonials-container'>
                <h6> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h6>
                        <div className='container-fluid ratings-avatar'>
                        <span className='ratings'> 
                            <h6> Star </h6>
                            <h6> Star </h6>
                            <h6> Star </h6>
                            <h6> Star </h6>
                        </span>
                        </div>
                   
                </div>

                <div className=' testimonials-container'>
                <h6> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h6>
                        <div className='container-fluid ratings-avatar'>
                        <span className='ratings'> 
                            <h6> Star </h6>
                            <h6> Star </h6>
                            <h6> Star </h6>
                            <h6> Star </h6>
                        </span>
                        </div>
                   
                </div>

                <div className=' testimonials-container'>
                <h6> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h6>
                        <div className='container-fluid ratings-avatar'>
                        <span className='ratings'> 
                            <h6> Star </h6>
                            <h6> Star </h6>
                            <h6> Star </h6>
                            <h6> Star </h6>
                        </span>
                        </div>
                   
                </div>

                <div className=' testimonials-container'>
                <h6> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h6>
                        <div className='container-fluid ratings-avatar'>
                        <span className='ratings'> 
                            <h6> Star </h6>
                            <h6> Star </h6>
                            <h6> Star </h6>
                            <h6> Star </h6>
                        </span>
                        </div>
                   
                </div>
            </Carousel>

            </div>

            {/*  Lookbook Page   */}
            <div className='container-fluid lookbook-page'> 
                <div className='img-container'> 
                    <img src='./images/event-img.jpg' className='first-image img-thumbnail img-fluid' alt='event-img' />
                    <img src='./images/event-img1.jpg' className='second-image img-thumbnail img-fluid' alt='event-img' />
                    <img src='./images/event-img2.jpg' className='third-image img-thumbnail img-fluid' alt='event-img' />
                </div>
                <div className='lookbook-content'> 
                    <h1> Lookbook </h1>
                    <p> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna. 
                    </p>
                    <div className='button'> <p> View More  </p> </div>
                </div>
            </div>
            
            {/* Footer Page */}
            
            <div className='container-fluid footer-page'> 
                <div className='logo-description-side'> 
                    <h1> Event Planner </h1>
                    <p> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                        luctus nec ullamcorper mattis, pulvinar dapibus leo. 
                    </p>
                    <span className='social-media'>
                        <img src='./images/facebook-svg.svg' alt='social-media-icon' /> 
                     <img src='./images/ig-svg.svg' alt='social-media-icon'  /> 
                     <img src='./images/twitter-svg.svg' alt='social-media-icon' /> 
                    </span>
                </div>
                <div className='links-side'> 
                    <div className='links'> 
                        <h4> Home </h4>
                         <h6> Home </h6> 
                         <h6> Services </h6> 
                         <h6> About </h6> 
                         <h6> Contact </h6> 
                    </div>
                    <div className='links'>
                        <h4> Link </h4>
                        <h6> Blog </h6>
                        <h6> FAQs </h6>
                        <h6> About </h6>
                        <h6> Contact </h6>
                    </div>
                    <div className='links last-link'> 
                        <h4> Contact </h4>
                        <span>
                        <h6> Contact </h6>
                        <h6> Services </h6>
                        <h6> Details </h6>
                        <h6> About </h6>
                        </span>

                    </div>
                </div>

                

            </div>

            <div className='container-fluid terms-conditions'> 
                    <div className='container termsandconditions'> 
                        <span> 
                            <h6> Terms of Service </h6> 
                            <h6> Privacy Policy </h6> 
                        </span>
                        <h6> © 2021 Event Planner • All rights reserved </h6>
                    </div>
                </div>

            </div>
        )
                }
}
