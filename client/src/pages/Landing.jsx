import "../App.css"

import Navbar from "../components/Navbar.jsx"
import Hero from "../components/Hero.jsx"
import Features from "../components/features/Features.jsx" 
import FeaturesCard from "../components/features/FeaturesCard.jsx"
import Contact from "../components/Contact.jsx"
import Footer from "../components/Footer.jsx"

function Landing(){
    return(
        <>
            <Navbar/>
            <Hero/>
            <Features/>
            <FeaturesCard/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Landing;