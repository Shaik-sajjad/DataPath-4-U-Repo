import './Hero.css'
import webimg from "../../assets/hero.png";

const Hero = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="hero" style={{ backgroundImage: `url(${webimg})` }}>
            <div className="hero-content">
                <h1>Clear Analytics Confident Business Decisions</h1>
                <p>Analytics & Automation To Make Faster And Smarter Decisions.</p>
                <div className="hero-buttons">
                    <button onClick={(e) => { e.preventDefault(); scrollToContact(); }}>Get Started</button>
                </div>
            </div>
        </section>
    )
}

export default Hero
