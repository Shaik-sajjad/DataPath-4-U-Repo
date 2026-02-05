import './Hero.css'

const Hero = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="hero">
            <div className="hero-left">
                <h1>Clear Analytics Confident Business Decisions</h1>
                <p>Analytics & Automation To Make Faster And Smarter Decisions.</p>
                <div className="hero-buttons">
                    <button onClick={(e) => { e.preventDefault(); scrollToContact(); }}>Get Started</button>
                </div>
            </div>
            <div className="hero-right">
                <img 
                    src="./images/Hero.png" 
                    alt="Image by Johannes Groll"
                    className="hero-image"
                    data-ssr-src-done="true"
                    fetchPriority="high"
                />
            </div>
        </section>
    )
}

export default Hero
