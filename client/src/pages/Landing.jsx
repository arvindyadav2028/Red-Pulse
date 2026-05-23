import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Features from "../components/features/Features.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

export default function Landing() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Hero />
            <Features />
            <Contact />
            <Footer />
        </div>
    );
}
