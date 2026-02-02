import './About.css';
import aboutImage from '../../assets/about.png';

const About = () => {
    const scrollToServices = () => {
        const servicesSection = document.getElementById('services')
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="about" className="about">
            <div className="about-content-wrapper">
                <p className="about-subtitle">
                    <span className="">Data Meets Direction!</span>
                </p>
                <h2 className="about-heading">
                    <span className="">What We Bring</span>
                </h2>
                <div className="about-text-content">
                    <p className="about-text">
                        <span className="">
                            At DATAPATH4U, we help businesses turn data into clarity, confidence, and action. Our focus is on building practical analytics and automation solutions that solve real operational problems—not just dashboards that look good.
                        </span>
                    </p>
                    <p className="about-text">
                        <span className="">
                            We start by understanding how your business actually works: your processes, challenges, and goals. From there, we design data solutions that deliver intelligent automation, actionable insights, and measurable impact. Whether it’s performance reporting, operational analytics, or forecasting, predictive modeling, financial modeling, and machine learning–driven insights, our solutions are built to scale with your business.Technology should simplify decision-making, not complicate it. That’s why we focus on clarity, usability, and results—so leaders can make informed decisions faster and with confidence.
                        </span>
                    </p>
                </div>
                <div className="about-button-wrapper">
                    <a
                        href="#services"
                        className="about-cta"
                        onClick={(e) => { e.preventDefault(); scrollToServices(); }}
                        aria-label="Discover More"
                    >
                        <span className="disvore-more-button">Discover More</span>
                    </a>
                </div>
            </div>
            <div className='about-image-section'>
                <img
                    src={aboutImage}
                    alt='about image'
                    className='about-image'
                />
            </div>
        </section>
    )
}

export default About
