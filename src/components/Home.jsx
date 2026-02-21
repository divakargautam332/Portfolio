import React from 'react'
import Navbar from './Navbar'
import Certificate from './Certificate'
import About from './About'
import Education from './Education'
import Footer from './Footer'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'


function Home() {
    return (
        <>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <Certificate></Certificate>
            <Contact></Contact>
        </>
    )
}

export default Home