import React from 'react'

import Navbar from './Navbar'
import Banner from './Banner'
import About from './About'
import Footer from './Footer'
import Journey from './Journey'
import Mission from './Mission'
import Feature from './Feature'
export default function Home() {
    return (
        <>
            <Banner />
            <Feature />
            {/* <About /> */}
            <Mission />
            <Journey />
        </>
    )
}
