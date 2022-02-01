import React from 'react';
import './Header.components.css';

// Importing THird party Libary
import { motion } from 'framer-motion'; // animation libary 

export function HeaderComponents() {
    const headerAni = {
        after: {opacity: 1},
        before: { opacity: 0}
    }
    return (
        <>
            <motion.div 
                initial= 'before'
                animate= 'after'
                transition={{ease: 'easeOut', duration: 2}}
                variants={headerAni}
                className='container-fluid here'
            >
                    <div className='logo'> <h4> <span style={{color: '#432818'}}> Event </span> <span style={{color: '#cebca6'}}> Planner </span> </h4> </div>
                    <div className='nav-items'>
                        <span> <a href='#about-us'> <h6> About Us </h6> </a> </span>
                        <span> <a href='#services'> <h6> Services </h6> </a> </span>
                        <span> <a href='#pricing'> <h6> Pricing </h6> </a> </span>
                    </div>
                    <div className='btn-container'> 
                        <div className='contact-btn'> <h6> Contact </h6> </div>
                    </div>
            </motion.div>
        </>
    )
}
