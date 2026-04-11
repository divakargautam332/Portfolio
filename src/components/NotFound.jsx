import { Link } from 'react-router-dom';
import { FaHome, FaArrowLeft, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function NotFound() {
    return (
        <section className="d-flex align-items-center" style={{ minHeight: 'calc(100vh - 200px)', background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)' }}>
            <div className="container text-center py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {/* Animated 404 Number */}
                        <div className="mb-4 position-relative">
                            <h1
                                className="display-1 fw-bold"
                                style={{
                                    fontSize: '8rem',
                                    background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textShadow: '0 10px 30px rgba(37,99,235,0.2)'
                                }}
                            >
                                404
                            </h1>
                            <div
                                className="position-absolute top-0 start-50 translate-middle-x"
                                style={{
                                    width: '150px',
                                    height: '150px',
                                    borderRadius: '50%',
                                    background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, rgba(37,99,235,0) 70%)',
                                    zIndex: -1
                                }}
                            ></div>
                        </div>

                        {/* Error Message */}
                        <h2 className="fw-bold mb-3" style={{ color: '#1f2937' }}>Page Not Found</h2>
                        <p className="text-muted mb-4" style={{ fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>
                            Oops! The page you're looking for doesn't exist or has been moved.
                        </p>

                        {/* Action Buttons */}
                        <div className="d-flex justify-content-center gap-3 flex-wrap mb-5">
                            <Link
                                to="/"
                                className="btn btn-primary px-4 py-2"
                                style={{
                                    backgroundColor: '#2563eb',
                                    border: 'none',
                                    borderRadius: '8px',
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
                                <FaHome className="me-2" /> Back to Home
                            </Link>

                            <button
                                onClick={() => window.history.back()}
                                className="btn btn-outline-primary px-4 py-2"
                                style={{
                                    borderColor: '#2563eb',
                                    color: '#2563eb',
                                    borderRadius: '8px',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#2563eb';
                                    e.target.style.color = 'white';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'transparent';
                                    e.target.style.color = '#2563eb';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                <FaArrowLeft className="me-2" /> Go Back
                            </button>
                        </div>

                        {/* Help Section */}
                        <div className="card shadow-sm border-0" style={{ borderRadius: '16px', backgroundColor: '#f8fafc' }}>
                            <div className="card-body p-4">
                                <h5 className="fw-bold mb-3" style={{ color: '#2563eb' }}>🔍 Need Help?</h5>
                                <p className="text-muted mb-3">
                                    Here are some helpful links to get you back on track:
                                </p>
                                <div className="d-flex flex-wrap justify-content-center gap-3">
                                    <Link to="/" className="text-decoration-none">🏠 Home</Link>
                                    <Link to="/about" className="text-decoration-none">👨‍💻 About</Link>
                                    <Link to="/projects" className="text-decoration-none">🚀 Projects</Link>
                                    <Link to="/skills" className="text-decoration-none">⚡ Skills</Link>
                                    <Link to="/contact" className="text-decoration-none">📞 Contact</Link>
                                </div>
                            </div>
                        </div>

                        {/* Contact Option */}
                        <div className="mt-4">
                            <p className="text-muted mb-2">
                                If you believe this is a mistake, feel free to reach out:
                            </p>
                            <div className="d-flex justify-content-center gap-3">
                                <a
                                    href="mailto:divakargautam@example.com"
                                    className="text-decoration-none"
                                    style={{ color: '#6b7280' }}
                                    onMouseEnter={(e) => e.target.style.color = '#2563eb'}
                                    onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                                >
                                    <FaEnvelope className="me-1" /> Email
                                </a>
                                <a
                                    href="https://github.com/divakargautam332"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-decoration-none"
                                    style={{ color: '#6b7280' }}
                                    onMouseEnter={(e) => e.target.style.color = '#2563eb'}
                                    onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                                >
                                    <FaGithub className="me-1" /> GitHub
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/divakar-gautam-5278882a9/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-decoration-none"
                                    style={{ color: '#6b7280' }}
                                    onMouseEnter={(e) => e.target.style.color = '#2563eb'}
                                    onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                                >
                                    <FaLinkedin className="me-1" /> LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}