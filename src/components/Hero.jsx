import { ReactTyped } from "react-typed";

export default function Hero() {
    return (
        <>
            <section className="py-5" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #e0e7ff 100%)" }}>
                <div className="container text-center">

                    {/* Main Heading */}
                    <div className="mb-4">
                        <div className="d-inline-block p-3 rounded-circle mb-3" style={{ backgroundColor: '#2563eb20' }}>
                            <span style={{ fontSize: '3rem' }}>👋</span>
                        </div>
                        <h1 className="fw-bold display-4" style={{ color: '#1f2937' }}>
                            Hi, I'm <span style={{ color: '#2563eb' }}>Divakar Gautam</span>
                        </h1>
                    </div>

                    {/* Typing Animation */}
                    <div className="mb-3">
                        <div className="d-inline-block px-4 py-2 rounded-pill" style={{ backgroundColor: '#2563eb10' }}>
                            <h4 className="mb-0" style={{ color: '#4b5563' }}>
                                <ReactTyped
                                    strings={[
                                        "💻 Full Stack Developer",
                                        "🚀 MERN Stack Developer",
                                        "☁️ DevOps Learner",
                                        "🎯 Problem Solver",
                                        "📱 Web Application Builder"
                                    ]}
                                    typeSpeed={50}
                                    backSpeed={30}
                                    loop
                                />
                            </h4>
                        </div>
                    </div>

                    {/* Description Card */}
                    <div className="row justify-content-center mt-4">
                        <div className="col-md-8">
                            <div className="card shadow-sm border-0 p-4" style={{ borderRadius: '16px', backgroundColor: 'white' }}>
                                <p className="text-muted mb-0" style={{ lineHeight: '1.8', fontSize: '1rem' }}>
                                    I build modern and scalable full-stack web applications using <strong className="text-primary">React, Node.js, Express, and MongoDB</strong>.
                                    I am also exploring DevOps and Cloud technologies like <strong className="text-primary">Docker, CI/CD, AWS, and Azure</strong>.
                                </p>
                                <p className="text-muted mt-3 mb-0" style={{ lineHeight: '1.8', fontSize: '1rem' }}>
                                    🎯 <strong className="text-primary">Aspiring Software Engineer</strong> focused on building real-world, production-ready applications.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="mt-4 d-flex justify-content-center gap-2 flex-wrap">
                        <span className="badge px-3 py-2" style={{ backgroundColor: '#2563eb', fontSize: '0.75rem' }}>React.js</span>
                        <span className="badge px-3 py-2" style={{ backgroundColor: '#2563eb', fontSize: '0.75rem' }}>Node.js</span>
                        <span className="badge px-3 py-2" style={{ backgroundColor: '#2563eb', fontSize: '0.75rem' }}>MongoDB</span>
                        <span className="badge px-3 py-2" style={{ backgroundColor: '#2563eb', fontSize: '0.75rem' }}>Express.js</span>
                        <span className="badge px-3 py-2" style={{ backgroundColor: '#2563eb', fontSize: '0.75rem' }}>Tailwind CSS</span>
                        <span className="badge px-3 py-2" style={{ backgroundColor: '#2563eb', fontSize: '0.75rem' }}>Docker</span>
                        <span className="badge px-3 py-2" style={{ backgroundColor: '#2563eb', fontSize: '0.75rem' }}>AWS</span>
                        <span className="badge px-3 py-2" style={{ backgroundColor: '#2563eb', fontSize: '0.75rem' }}>Azure</span>
                    </div>

                    {/* Buttons */}
                    <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
                        <a
                            href="https://docs.google.com/document/d/1eXZhoYFGdGksqvV0Xh17SZ1Y8qIZdyjl/edit"
                            className="btn px-4 py-2"
                            target="_blank"
                            rel="noreferrer"
                            style={{ backgroundColor: '#2563eb', border: 'none', color: 'white', fontWeight: '500' }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#2563eb'}
                        >
                            📄 Download Resume
                        </a>

                        <a
                            href="#projects"
                            className="btn px-4 py-2"
                            style={{ border: '2px solid #2563eb', color: '#2563eb', backgroundColor: 'transparent', fontWeight: '500' }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#2563eb';
                                e.target.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = '#2563eb';
                            }}
                        >
                            🔥 View Projects
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="mt-5 d-flex justify-content-center gap-4">
                        <a
                            href="https://github.com/divakargautam332"
                            target="_blank"
                            rel="noreferrer"
                            className="social-icon"
                            style={{ fontSize: '1.8rem', color: '#333', transition: 'all 0.3s ease' }}
                            onMouseEnter={(e) => e.target.style.color = '#2563eb'}
                            onMouseLeave={(e) => e.target.style.color = '#333'}
                        >
                            <i className="bi bi-github"></i>
                        </a>

                        <a
                            href="https://linkedin.com/in/divakargautam"
                            target="_blank"
                            rel="noreferrer"
                            className="social-icon"
                            style={{ fontSize: '1.8rem', color: '#0a66c2', transition: 'all 0.3s ease' }}
                            onMouseEnter={(e) => e.target.style.color = '#2563eb'}
                            onMouseLeave={(e) => e.target.style.color = '#0a66c2'}
                        >
                            <i className="bi bi-linkedin"></i>
                        </a>

                        <a
                            href="mailto:divakargautam@example.com"
                            className="social-icon"
                            style={{ fontSize: '1.8rem', color: '#ea4335', transition: 'all 0.3s ease' }}
                            onMouseEnter={(e) => e.target.style.color = '#2563eb'}
                            onMouseLeave={(e) => e.target.style.color = '#ea4335'}
                        >
                            <i className="bi bi-envelope"></i>
                        </a>

                        <a
                            href="https://twitter.com/your-twitter"
                            target="_blank"
                            rel="noreferrer"
                            className="social-icon"
                            style={{ fontSize: '1.8rem', color: '#1da1f2', transition: 'all 0.3s ease' }}
                            onMouseEnter={(e) => e.target.style.color = '#2563eb'}
                            onMouseLeave={(e) => e.target.style.color = '#1da1f2'}
                        >
                            <i className="bi bi-twitter"></i>
                        </a>
                    </div>

                </div>
            </section>

            <style jsx>{`
                .badge {
                    transition: all 0.2s ease;
                }
                .badge:hover {
                    transform: translateY(-2px);
                    opacity: 0.9;
                }
                .btn {
                    transition: all 0.2s ease;
                    border-radius: 8px;
                }
                .btn:hover {
                    transform: translateY(-2px);
                }
                .social-icon {
                    transition: all 0.2s ease;
                    display: inline-block;
                }
                .social-icon:hover {
                    transform: translateY(-3px);
                }
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .card {
                    animation: fadeInUp 0.6s ease-out;
                }
            `}</style>
        </>
    );
}