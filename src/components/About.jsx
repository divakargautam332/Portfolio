export default function About() {
    return (
        <>
            <section id="about" className="py-5">
                <div className="container">
                    <h2 className="fw-bold text-center mb-5" style={{ fontSize: '2.5rem' }}>👨‍💻 About Me</h2>

                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="card shadow-lg h-100 border-0 hover-effect p-4">
                                <div className="card-body p-4">

                                    {/* Profile Introduction */}
                                    <div className="text-center mb-4">
                                        <div className="d-inline-block p-3 rounded-circle mb-3" style={{ backgroundColor: '#e0e7ff' }}>
                                            <span style={{ fontSize: '3rem' }}>🚀</span>
                                        </div>
                                        <h3 className="fw-bold" style={{ color: '#2563eb' }}>Divakar Gautam</h3>
                                        <p className="text-muted">Full Stack Developer | DevOps Enthusiast | Problem Solver</p>
                                        <div className="d-flex justify-content-center gap-2 flex-wrap">
                                            <span className="badge px-3 py-2" style={{ backgroundColor: '#2563eb' }}>React.js</span>
                                            <span className="badge px-3 py-2" style={{ backgroundColor: '#2563eb' }}>Node.js</span>
                                            <span className="badge px-3 py-2" style={{ backgroundColor: '#2563eb' }}>MongoDB</span>
                                            <span className="badge px-3 py-2" style={{ backgroundColor: '#2563eb' }}>Express.js</span>
                                            <span className="badge px-3 py-2" style={{ backgroundColor: '#2563eb' }}>Tailwind CSS</span>
                                            <span className="badge px-3 py-2" style={{ backgroundColor: '#2563eb' }}>Docker</span>
                                            <span className="badge px-3 py-2" style={{ backgroundColor: '#2563eb' }}>Azure</span>
                                            <span className="badge px-3 py-2" style={{ backgroundColor: '#2563eb' }}>AWS</span>
                                        </div>
                                    </div>

                                    {/* About Content */}
                                    <div className="row mt-4">
                                        <div className="col-md-7">
                                            <p className="fw-semibold mb-2" style={{ color: '#374151', fontSize: '1.1rem' }}>
                                                📌 Who Am I?
                                            </p>
                                            <p className="text-muted" style={{ lineHeight: '1.8' }}>
                                                Hi, I'm <strong className="text-primary">Divakar Gautam</strong>, a B.Tech CSE student and a passionate Full Stack Developer.
                                                I specialize in building modern and responsive web applications using React, Node.js, Express, and MongoDB.
                                            </p>

                                            <p className="fw-semibold mb-2 mt-3" style={{ color: '#374151', fontSize: '1.1rem' }}>
                                                ☁️ DevOps & Cloud Journey
                                            </p>
                                            <p className="text-muted" style={{ lineHeight: '1.8' }}>
                                                Alongside development, I am actively exploring DevOps and Cloud technologies, learning tools like Docker,
                                                CI/CD pipelines, and cloud platforms such as Microsoft Azure and AWS to deploy, manage, and scale applications efficiently.
                                            </p>
                                        </div>

                                        <div className="col-md-5">
                                            <p className="fw-semibold mb-2" style={{ color: '#374151', fontSize: '1.1rem' }}>
                                                💻 Problem Solving
                                            </p>
                                            <p className="text-muted" style={{ lineHeight: '1.8' }}>
                                                I have solved <strong className="text-primary">300+ Data Structures & Algorithms problems</strong> using Java,
                                                which has strengthened my problem-solving ability and helped me write efficient and optimized code.
                                            </p>

                                            <p className="fw-semibold mb-2 mt-3" style={{ color: '#374151', fontSize: '1.1rem' }}>
                                                🎯 My Goal
                                            </p>
                                            <p className="text-muted" style={{ lineHeight: '1.8' }}>
                                                <strong className="text-primary">My goal is to become a skilled Software Engineer</strong> with expertise in
                                                Full Stack Development and DevOps, and to build scalable, real-world applications using modern cloud technologies.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Stats Section */}
                                    <div className="row mt-4 pt-3 text-center">
                                        <div className="col-md-4 mb-3">
                                            <div className="p-3 rounded" style={{ backgroundColor: '#f0f4ff' }}>
                                                <div style={{ fontSize: '2rem', color: '#2563eb' }}>🎓</div>
                                                <h4 className="fw-bold mb-0" style={{ color: '#2563eb' }}>B.Tech CSE</h4>
                                                <p className="text-muted small">Current Student</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="p-3 rounded" style={{ backgroundColor: '#f0f4ff' }}>
                                                <div style={{ fontSize: '2rem', color: '#2563eb' }}>💻</div>
                                                <h4 className="fw-bold mb-0" style={{ color: '#2563eb' }}>300+</h4>
                                                <p className="text-muted small">DSA Problems Solved</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="p-3 rounded" style={{ backgroundColor: '#f0f4ff' }}>
                                                <div style={{ fontSize: '2rem', color: '#2563eb' }}>🚀</div>
                                                <h4 className="fw-bold mb-0" style={{ color: '#2563eb' }}>10+</h4>
                                                <p className="text-muted small">Projects Completed</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Connect Section */}
                                    <div className="text-center mt-4 pt-3">
                                        <p className="fw-semibold mb-3" style={{ color: '#374151' }}>📫 Let's Connect</p>
                                        <div className="d-flex justify-content-center gap-3">
                                            <a href="https://github.com/divakargautam332" className="btn btn-outline-primary px-4 py-2" target="_blank" rel="noopener noreferrer">
                                                GitHub
                                            </a>
                                            <a href="https://www.linkedin.com/in/divakar-gautam-5278882a9/" className="btn btn-outline-primary px-4 py-2" target="_blank" rel="noopener noreferrer">
                                                LinkedIn
                                            </a>
                                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=divakargautam7900@gmail.com" target="_blank" class="btn btn-outline-primary px-4 py-2">
                                                Email
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom CSS for hover effect matching projects section */}
            <style jsx>{`
                .hover-effect {
                    transition: all 0.3s ease;
                    border-radius: 16px;
                }
                .hover-effect:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
                }
                .badge {
                    font-size: 0.75rem;
                    padding: 6px 12px;
                    border-radius: 20px;
                }
                .btn-outline-primary {
                    border-color: #2563eb;
                    color: #2563eb;
                    transition: all 0.2s ease;
                }
                .btn-outline-primary:hover {
                    background-color: #2563eb;
                    color: white;
                    transform: translateY(-2px);
                }
            `}</style>
        </>
    );
}