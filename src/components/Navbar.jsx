import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
        const navbarCollapse = document.querySelector('#navbarNav');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    };

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { path: '/', label: 'Home', icon: '🏠' },
        { path: '/about', label: 'About', icon: '👨‍💻' },
        { path: '/skills', label: 'Skills', icon: '⚡' },
        { path: '/projects', label: 'Projects', icon: '🚀' },
        { path: '/education', label: 'Education', icon: '🎓' },
        { path: '/contact', label: 'Contact', icon: '📧' }
    ];

    return (
        <nav
            className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white shadow-sm py-3'
                }`}
            style={{ backdropFilter: 'blur(10px)', zIndex: 1000 }}
        >
            <div className="container">
                {/* Brand/Logo - Fixed Name Display */}
                <Link
                    className="navbar-brand fw-bold"
                    to="/"
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: '#2563eb',
                        textDecoration: 'none'
                    }}
                >
                    Divakar Gautam
                </Link>

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    style={{ outline: 'none' }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links */}
                <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-2">
                        {navLinks.map((link) => (
                            <li className="nav-item" key={link.path}>
                                <Link
                                    className={`nav-link fw-semibold px-3 py-2 rounded-3 transition-all ${location.pathname === link.path ? 'active' : ''
                                        }`}
                                    to={link.path}
                                    onClick={closeMenu}
                                    style={{
                                        color: location.pathname === link.path ? '#2563eb' : '#4b5563',
                                        transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (location.pathname !== link.path) {
                                            e.target.style.backgroundColor = '#f0f4ff';
                                            e.target.style.color = '#2563eb';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (location.pathname !== link.path) {
                                            e.target.style.backgroundColor = 'transparent';
                                            e.target.style.color = '#4b5563';
                                        }
                                    }}
                                >
                                    <span className="me-1">{link.icon}</span>
                                    {link.label}
                                </Link>
                            </li>
                        ))}

                        {/* Resume Button */}
                        <li className="nav-item ms-lg-2">
                            <a
                                href="https://docs.google.com/document/d/1eXZhoYFGdGksqvV0Xh17SZ1Y8qIZdyjl/edit"
                                className="btn px-4 py-2 rounded-3 fw-semibold"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    backgroundColor: '#2563eb',
                                    border: 'none',
                                    color: 'white',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#1d4ed8';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = '#2563eb';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                📄 Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <style jsx>{`
                .navbar-toggler:focus {
                    box-shadow: none;
                }
                .nav-link.active {
                    background-color: #e0e7ff !important;
                    color: #2563eb !important;
                }
                .navbar-collapse {
                    transition: all 0.3s ease;
                }
                .navbar-brand {
                    background: none !important;
                    -webkit-text-fill-color: initial !important;
                }
                @media (max-width: 991px) {
                    .navbar-collapse {
                        background: white;
                        padding: 1rem;
                        border-radius: 12px;
                        margin-top: 1rem;
                        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                    }
                    .nav-link {
                        padding: 10px 15px !important;
                    }
                    .btn {
                        margin-top: 10px;
                        width: 100%;
                        text-align: center;
                    }
                }
            `}</style>
        </nav>
    );
}