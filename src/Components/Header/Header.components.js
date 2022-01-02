import React from 'react';
import './Header.components.css'

export function HeaderComponents() {
    return (
        <>
            <div className='container-fluid here'>
                <div className='logo'> LOGO here  </div>
                <div className='nav-items'>
                    <span> <h6> Home </h6> </span>
                    <span> <a href='#about-us'> <h6> About Us </h6> </a> </span>
                    <span> <a href='#services'> <h6> Services </h6> </a> </span>
                </div>
                <div className='btn-container'> 
                    <div className='contact-btn'> <h6> Contact </h6> </div>
                </div>
            </div>
        </>
    )
}
