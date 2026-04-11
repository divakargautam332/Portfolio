export default function Certificate() {
    const certificates = [
        {
            title: "Programming in Java",
            issuer: "NPTEL",
            year: "2025",
            credentialId: "NPTEL-JAVA-2025",
            icon: "☕",
            color: "#e11d48",
            viewLink: "https://drive.google.com/file/d/11xi7lmULnBm1vbh-Qj8mAIQb5OIERb58/view?usp=sharing",
            downloadLink: "https://drive.google.com/file/d/11xi7lmULnBm1vbh-Qj8mAIQb5OIERb58/view?usp=sharing",
            description: "Comprehensive course covering object-oriented programming, collections, multithreading, and Java fundamentals."
        },
        {
            title: "Full Stack Development",
            issuer: "Apna College",
            year: "2025",
            credentialId: "APNA-FSD-2025",
            icon: "🚀",
            color: "#2563eb",
            viewLink: "https://drive.google.com/file/d/1zjqrZa1H-9M6iU0HpwB2_hvxdBDr2a2t/view?usp=sharing",
            downloadLink: "https://drive.google.com/file/d/1zjqrZa1H-9M6iU0HpwB2_hvxdBDr2a2t/view?usp=sharing",
            description: "Complete full-stack development training covering MERN stack, REST APIs, and deployment."
        },
        {
            title: "Java With DSA",
            issuer: "Apna College",
            year: "2025",
            credentialId: "APNA-DSA-2025",
            icon: "📊",
            color: "#16a34a",
            viewLink: "https://drive.google.com/file/d/1ZfviSlBROrt0Ut1acpBMWZyaFp_ifHZ8/view?usp=sharing",
            downloadLink: "https://drive.google.com/file/d/1ZfviSlBROrt0Ut1acpBMWZyaFp_ifHZ8/view?usp=sharing",
            description: "Data Structures and Algorithms implementation in Java with problem-solving techniques."
        }
    ];

    return (
        <>
            <section id="certificate" className="py-5" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)" }}>
                <div className="container">
                    <h2 className="fw-bold text-center mb-5" style={{ fontSize: '2.5rem', color: '#1f2937' }}>
                        📜 Certificates
                    </h2>

                    <div className="row g-4 justify-content-center">
                        {certificates.map((cert, index) => (
                            <div className="col-md-6 col-lg-4" key={index}>
                                <div
                                    className="card shadow-sm border-0 h-100 hover-effect"
                                    style={{
                                        borderRadius: '16px',
                                        transition: 'all 0.3s ease',
                                        backgroundColor: 'white'
                                    }}
                                >
                                    <div className="card-body p-4">
                                        {/* Header with Icon */}
                                        <div className="text-center mb-3">
                                            <div
                                                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                                style={{
                                                    width: '70px',
                                                    height: '70px',
                                                    backgroundColor: `${cert.color}15`,
                                                    fontSize: '2rem'
                                                }}
                                            >
                                                {cert.icon}
                                            </div>
                                            <h4 className="fw-bold" style={{ color: cert.color }}>
                                                {cert.title}
                                            </h4>
                                        </div>

                                        {/* Certificate Details */}
                                        <div className="mb-3">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span className="text-muted" style={{ fontSize: '0.875rem' }}>
                                                    🏛️ {cert.issuer}
                                                </span>
                                                <span className="text-muted" style={{ fontSize: '0.875rem' }}>
                                                    📅 {cert.year}
                                                </span>
                                            </div>
                                            <div className="mb-2">
                                                <span
                                                    className="px-2 py-1 rounded-pill"
                                                    style={{
                                                        backgroundColor: '#f0f4ff',
                                                        color: '#2563eb',
                                                        fontSize: '0.7rem',
                                                        fontWeight: '500'
                                                    }}
                                                >
                                                    ID: {cert.credentialId}
                                                </span>
                                            </div>
                                            <p className="text-muted small mt-2 mb-0" style={{ lineHeight: '1.5' }}>
                                                {cert.description}
                                            </p>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="d-flex gap-2 mt-3">
                                            <a
                                                href={cert.viewLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn flex-grow-1"
                                                style={{
                                                    backgroundColor: cert.color,
                                                    border: 'none',
                                                    color: 'white',
                                                    borderRadius: '8px',
                                                    padding: '8px 16px',
                                                    fontSize: '0.875rem',
                                                    transition: 'all 0.2s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.opacity = '0.9';
                                                    e.target.style.transform = 'translateY(-2px)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.opacity = '1';
                                                    e.target.style.transform = 'translateY(0)';
                                                }}
                                            >
                                                👁️ View Certificate
                                            </a>
                                            <a
                                                href={cert.downloadLink}
                                                download
                                                className="btn flex-grow-1"
                                                style={{
                                                    backgroundColor: 'transparent',
                                                    border: `2px solid ${cert.color}`,
                                                    color: cert.color,
                                                    borderRadius: '8px',
                                                    padding: '8px 16px',
                                                    fontSize: '0.875rem',
                                                    transition: 'all 0.2s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.backgroundColor = cert.color;
                                                    e.target.style.color = 'white';
                                                    e.target.style.transform = 'translateY(-2px)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.backgroundColor = 'transparent';
                                                    e.target.style.color = cert.color;
                                                    e.target.style.transform = 'translateY(0)';
                                                }}
                                            >
                                                ⬇️ Download
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Certificate Stats Summary */}
                    <div className="row mt-5 justify-content-center">
                        <div className="col-md-8">
                            <div className="card shadow-sm border-0 text-center" style={{ borderRadius: '16px', backgroundColor: '#f8fafc' }}>
                                <div className="card-body p-4">
                                    <h5 className="fw-bold mb-3" style={{ color: '#2563eb' }}>📊 Certification Summary</h5>
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="fw-bold" style={{ fontSize: '1.5rem', color: '#e11d48' }}>3+</div>
                                            <small className="text-muted">Certificates</small>
                                        </div>
                                        <div className="col-4">
                                            <div className="fw-bold" style={{ fontSize: '1.5rem', color: '#2563eb' }}>2+</div>
                                            <small className="text-muted">Platforms</small>
                                        </div>
                                        <div className="col-4">
                                            <div className="fw-bold" style={{ fontSize: '1.5rem', color: '#16a34a' }}>2025</div>
                                            <small className="text-muted">Latest Year</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .hover-effect {
                    transition: all 0.3s ease;
                }
                .hover-effect:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
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
                    animation: fadeInUp 0.5s ease-out forwards;
                    opacity: 0;
                }
                .card:nth-child(1) { animation-delay: 0.1s; }
                .card:nth-child(2) { animation-delay: 0.2s; }
                .card:nth-child(3) { animation-delay: 0.3s; }
            `}</style>
        </>
    );
}