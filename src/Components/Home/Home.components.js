import React, { Component } from 'react';
import { HeaderComponents } from '../Header/Header.components';
import './Home.components.css';

export class HomeComponents extends Component {
    render(){
        return(
            <div>
                <HeaderComponents />
                {/* Hero-container */}
                <div className='container-fluid hero-container'>
                    <h1> Introduction </h1>
                    <h4> Let's Plab Your Next Event Together </h4>
                    <div className='contact-button'> 
                        <h5> Contact </h5>
                    </div>
                </div>

                {/* About Us Page */}
                <div className='container-fluid about-us' id='about-us'>
                    <h1> About Us </h1>
                    <div className='about-us-content'> 
                        <div className='left-content'>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidata. </p>    
                        </div>
                        <div className='right-content'> 
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div>
                </div>

                {/* Services Page */}
                <div className='container-fluid services-page' id='home'> 

                    <div className='container service-container'>
                        <img src='./images/birthday.jpg' alt='birthday-img' className='img-thumbnail' /> 
                        <h3> Birthday </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>

                    <div className='container service-container'>
                        <img src='./images/event.jpg' alt='event-img' className='img-thumbnail' /> 
                        <h3> Event </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>

                    <div className='container service-container'>
                        <img src='./images/wedding.jpg' alt='wedding-img' className='img-thumbnail' /> 
                        <h3> Weddings </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>

                    <div className='container service-container'>
                        <img src='./images/chrismas.jpg' alt='festival-img' className='img-thumbnail' /> 
                        <h3> Festival </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>

                </div>

                {/* Description Page */}
                <div className='container-fluid description-page'>
                    <div className='container description-left'> 
                        <h1> We Make Dreams <br /> Come True! </h1>
                        <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat 
                        </p>
                    <div className='contact-btn'> <h6> Contact </h6> </div>
                    </div>
                    <div className='container description-right'>
                        <div className='container details-container'>
                            <div className='small-logo' >
                                <img src='./images/wand.svg' alt='wand-svg' className='img-thumbnail svg' />
                            </div>
                            <h4> Decoration </h4>
                                <p>
                                     Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. 
                                </p>
                        </div>
                        <div className='container details-container'>
                        <div className='small-logo' >
                                <img src='./images/sppon.svg' alt='spoon-svg' className='img-thumbnail svg' />
                            </div>
                            <h4> Chatering </h4>
                            <p>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit. 
                            </p>
                        </div>
                        
                        <div className='container details-container'>
                        <div className='small-logo' >
                                <img src='./images/camera.svg' alt='camera-svg' className='img-thumbnail svg' />
                            </div>
                            <h4> Photo </h4>
                            <p>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit. 
                            </p>
                        </div>
                        <div className='container details-container'>
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

                {/* Quotes Page */}
            <div className='container-fluid quotes-page'> 
                <div className='container image-side'>
                    <img src='./images/event-img.jpg' alt='table-img' className='img-thumbnail' />
                    <img src='./images/event-img1.jpg' alt='table-img1' className='second-img img-thumbnail' />
                </div>
                <div className='container quote-side'> 
                    <h1> You Deserve <br /> The Art of <br /> Perfection </h1> 
                </div>
            </div>

            {/* Pricing page */}
            <div className='container-fluid pricing-page' id='services'>
                <div className='pricing-heading'>
                <h1> Pricing </h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
                </div>
                
                <div className='container-fluid price-wrapper'>
                <div className='container price-container'> 
                    <h1 className='pricing-h1'> birthday </h1>
                    <h1> Rs 1000 </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Duis aute irure dolor in </p> </span>
                    <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Sint occaecat cupidatat </p> </span>
                    <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Sunt in culpa qui officia </p> </span>
                    <span className='book-now'> <h6> Book now &#8594; </h6> </span>
                </div>
                <div className='container price-container'>
                <h1 className='pricing-h1'> Event </h1>
                    <h1> Rs 2000 </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Duis aute irure dolor in </p> </span>
                    <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Sint occaecat cupidatat </p> </span>
                    <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Sunt in culpa qui officia </p> </span>
                    <span className='book-now'> <h6> Book now &#8594;  </h6> </span>
                    
                </div>
                <div className='container price-container'> 
                <h1 className='pricing-h1'> Weddings </h1>
                    <h1> Rs 9000 </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Duis aute irure dolor in </p> </span>
                    <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Sint occaecat cupidatat </p> </span>
                    <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Sunt in culpa qui officia </p> </span>
                    <span className='book-now'> <h6> Book now &#8594; </h6> </span>
                    
                </div>
                <div className='container price-container'> 
                <h1 className='pricing-h1'> Festival </h1>
                    <h1> Rs 6000 </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Duis aute irure dolor in </p> </span>
                    <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Sint occaecat cupidatat </p> </span>
                    <span className='tick-container'> <img src='./images/tick.svg' alt='tick-svg' /> <p> Sunt in culpa qui officia </p> </span>
                    <span className='book-now'> <h6> Book now &#8594; </h6> </span>
                    
                </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className='container-fluid testimonials-page'>
            
            <h1> Testimonials </h1>
            <div className='container testimonials-container'>
                <h6> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h6>
                <div className='container-fluid ratings-avatar'>  
                <span className='ratings'> 
                    <h6> Star </h6>
                    <h6> Star </h6>
                    <h6> Star </h6>
                    <h6> Star </h6>
                </span>
                <img src='./images/avatar.jpg' className='avatar' alt='avatar' />
                </div>
            </div>

            </div>

            {/*  Lookbook Page   */}
            <div className='container-fluid lookbook-page'> 
                <div className='img-container'> 
                    <img src='./images/event-img.jpg' className='first-image img-thumbnail' alt='event-img' />
                    <img src='./images/event-img1.jpg' className='second-image img-thumbnail' alt='event-img' />
                    <img src='./images/event-img2.jpg' className='third-image img-thumbnail' alt='event-img' />
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
                    <h1> Introduction </h1>
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
                    <div className='links'> 
                        <h4> Contact </h4>
                        <h6> Contact </h6>
                        <h6> Services </h6>
                        <h6> Details </h6>
                        <h6> About </h6>
                    </div>
                </div>

                

            </div>

            <div className='container-fluid terms-conditions'> 
                    <div className='container termsandconditions'> 
                        <span> 
                            <h6> Terms of Service </h6> 
                            <h6> Privacy Policy </h6> 
                        </span>
                        <h6> © 2021 Introduction • All rights reserved </h6>
                    </div>
                </div>

            </div>
        )
                }
}
