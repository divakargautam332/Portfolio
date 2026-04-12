import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaCode, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import VisitorCounter from "./VisitorCounter";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Skills", href: "/skills" },
        { name: "Projects", href: "/projects" },
        { name: "Education", href: "/education" },
        { name: "Certificates", href: "/certificates" },
        { name: "Contact", href: "/contact" }
    ];

    const socialLinks = [
        { name: "GitHub", icon: FaGithub, url: "https://github.com/divakargautam332", color: "#333", hoverColor: "#ffffff" },
        { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/divakar-gautam-5278882a9/", color: "#0a66c2", hoverColor: "#0a66c2" },
        { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/divakar_gautam_169/", color: "#e4405f", hoverColor: "#e4405f" },
        { name: "LeetCode", icon: FaCode, url: "https://leetcode.com/u/Divakar_Gautam/", color: "#f89f1b", hoverColor: "#f89f1b" }
    ];

    return (
        <>
            <footer className="mt-5" style={{ backgroundColor: '#1f2937', color: '#9ca3af' }}>
                <div className="container py-5">
                    <div className="row g-4">
                        {/* About Section */}
                        <div className="col-md-4">
                            <h5 className="fw-bold mb-3" style={{ color: '#ffffff' }}>Divakar Gautam</h5>
                            <p className="small" style={{ lineHeight: '1.6' }}>
                                Full Stack Developer passionate about building modern web applications
                                with MERN stack. Always eager to learn new technologies and solve real-world problems.
                            </p>
                            <div className="mt-3">
                                <span className="badge me-2 mb-2" style={{ backgroundColor: '#2563eb', color: 'white' }}>React.js</span>
                                <span className="badge me-2 mb-2" style={{ backgroundColor: '#2563eb', color: 'white' }}>Node.js</span>
                                <span className="badge me-2 mb-2" style={{ backgroundColor: '#2563eb', color: 'white' }}>MongoDB</span>
                                <span className="badge me-2 mb-2" style={{ backgroundColor: '#2563eb', color: 'white' }}>Java</span>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-md-4">
                            <h5 className="fw-bold mb-3" style={{ color: '#ffffff' }}>Quick Links</h5>
                            <ul className="list-unstyled">
                                {quickLinks.map((link, index) => (
                                    <li key={index} className="mb-2">
                                        <a
                                            href={link.href}
                                            className="text-decoration-none transition-all"
                                            style={{ color: '#9ca3af', transition: 'all 0.2s ease' }}
                                            onMouseEnter={(e) => e.target.style.color = '#2563eb'}
                                            onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="col-md-4">
                            <h5 className="fw-bold mb-3" style={{ color: '#ffffff' }}>Get in Touch</h5>
                            <ul className="list-unstyled">
                                <li className="mb-3 d-flex align-items-center">
                                    <FaEnvelope className="me-2" style={{ color: '#2563eb' }} />
                                    <span>divakargautam7900@gmail.com</span>
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaPhone className="me-2" style={{ color: '#2563eb' }} />
                                    <span>+91 72518 67239</span>
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaMapMarkerAlt className="me-2" style={{ color: '#2563eb' }} />
                                    <span>Bulandshahr, Uttar Pradesh, India</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="text-center mt-4 pt-3 border-top" style={{ borderColor: '#374151' }}>
                        <div className="d-flex justify-content-center gap-4 flex-wrap mb-3">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className="d-flex align-items-center gap-2 text-decoration-none transition-all"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: '#9ca3af',
                                            transition: 'all 0.2s ease',
                                            padding: '8px 16px',
                                            borderRadius: '8px'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = social.hoverColor;
                                            e.target.style.backgroundColor = `${social.hoverColor}15`;
                                            e.target.style.transform = 'translateY(-3px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#9ca3af';
                                            e.target.style.backgroundColor = 'transparent';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <Icon size={20} />
                                        {social.name}
                                    </a>
                                );
                            })}
                        </div>



                        {/* Copyright */}
                        <p className="small mb-0" style={{ color: '#6b7280' }}>
                            © {currentYear} Divakar Gautam — All Rights Reserved
                        </p>
                        <p className="small mt-2" style={{ color: '#6b7280' }}>
                            Built with ❤️ using React.js
                        </p>
                    </div>
                </div>
            </footer>

            <style jsx>{`
                .transition-all {
                    transition: all 0.2s ease;
                }
                .badge {
                    padding: 6px 12px;
                    font-weight: 500;
                }
            `}</style>
        </>
    );
}