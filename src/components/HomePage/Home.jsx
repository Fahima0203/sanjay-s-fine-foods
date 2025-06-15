import React from 'react'

import WelcomePage from './Welcome'
import Slideshow from '../SlideShow';
import HomeProduct from './HomeProduct/HomeProduct';

function Home() {
    return (
        <>
            {/* <video width="750" height="500" autoPlay >
                <source src={gif} type="video/mp4"/>
            </video> */}
            <Slideshow />
            <HomeProduct />
            <WelcomePage />
        </>
    )
}

export default Home