import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import logo from "../../assets/logo.png";

const Header = () => {
    const location = useLocation()

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            window.location.href = `/#${sectionId}`
            return
        }
        const section = document.getElementById(sectionId)
        if (section) {
            const headerOffset = 80
            const elementPosition = section.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <header className="header">
            <nav className="nav">
                <div className="nav-container">
                    <div className="logo">
                        <Link
                            to="/"
                            className="logo-link"
                            data-testid="linkElement"
                        >
                            <img
                                fetchPriority="high"
                                sizes="174px"
                                src={logo}
                                alt="DataPath4U"
                                className="Logo"
                                width="300"
                                height="150"
                            />
                        </Link>
                    </div>
                    <ul className="nav-menu">
                        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a></li>
                        <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Services</a></li>
                        <li><a href="#tech" onClick={(e) => { e.preventDefault(); scrollToSection('tech') }}>Tech</a></li>
                        <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
