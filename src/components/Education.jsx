export default function Education() {
    const educationData = [
        {
            degree: "B.Tech (Computer Science & Engineering)",
            institution: "R.D. Engineering College, Duhai, Ghaziabad",
            board: "AKTU University",
            year: "2023 - 2027",
            yearLabel: "Expected 2027",
            score: "CGPA: 7.5 (Current)",
            icon: "🎓",
            color: "#2563eb",
            description: "Pursuing Bachelor's degree in Computer Science with focus on Full Stack Development and Cloud Computing."
        },
        {
            degree: "Class 12th (Intermediate)",
            institution: "M.B.L.K. Inter College, Jirouli, Bulandshahr",
            board: "UP Board",
            year: "2020 - 2022",
            yearLabel: "2022",
            score: "Percentage: 75%",
            icon: "📚",
            color: "#16a34a",
            description: "Completed intermediate education with focus on Mathematics and Computer Science."
        },
        {
            degree: "Class 10th (High School)",
            institution: "M.B.L.K. Inter College, Jirouli, Bulandshahr",
            board: "UP Board",
            year: "2018 - 2020",
            yearLabel: "2020",
            score: "Percentage: 80%",
            icon: "📖",
            color: "#e11d48",
            description: "Completed high school education with distinction in Science and Mathematics."
        }
    ];

    return (
        <>
            <section id="education" className="py-5" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)" }}>
                <div className="container">
                    <h2 className="fw-bold text-center mb-5" style={{ fontSize: '2.5rem', color: '#1f2937' }}>
                        🎓 Education Journey
                    </h2>

                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {/* Timeline Style Education Cards */}
                            <div className="position-relative">
                                {/* Vertical Line for Timeline */}
                                <div className="d-none d-md-block position-absolute" style={{
                                    left: '120px',
                                    top: '30px',
                                    bottom: '30px',
                                    width: '2px',
                                    backgroundColor: '#e5e7eb',
                                    zIndex: 0
                                }}></div>

                                {educationData.map((edu, index) => (
                                    <div
                                        key={index}
                                        className="card shadow-sm border-0 mb-4 hover-effect position-relative"
                                        style={{
                                            borderRadius: '16px',
                                            transition: 'all 0.3s ease',
                                            backgroundColor: 'white',
                                            zIndex: 1
                                        }}
                                    >
                                        <div className="card-body p-4">
                                            <div className="row align-items-start">
                                                {/* Icon Column */}
                                                <div className="col-md-2 text-center mb-3 mb-md-0">
                                                    <div
                                                        className="rounded-circle d-inline-flex align-items-center justify-content-center"
                                                        style={{
                                                            width: '60px',
                                                            height: '60px',
                                                            backgroundColor: `${edu.color}15`,
                                                            fontSize: '2rem'
                                                        }}
                                                    >
                                                        {edu.icon}
                                                    </div>
                                                </div>

                                                {/* Content Column */}
                                                <div className="col-md-10">
                                                    <div className="d-flex flex-wrap justify-content-between align-items-start mb-2">
                                                        <h3 className="fw-bold mb-2 mb-md-0" style={{ color: edu.color, fontSize: '1.5rem' }}>
                                                            {edu.degree}
                                                        </h3>
                                                        <span className="badge px-3 py-2" style={{ backgroundColor: edu.color, fontSize: '0.75rem' }}>
                                                            {edu.yearLabel}
                                                        </span>
                                                    </div>

                                                    <h6 className="text-muted mb-2" style={{ fontSize: '1rem' }}>
                                                        🏛️ {edu.institution}
                                                    </h6>

                                                    <div className="d-flex flex-wrap gap-3 mb-3">
                                                        <span className="text-secondary" style={{ fontSize: '0.875rem' }}>
                                                            📅 {edu.year}
                                                        </span>
                                                        <span className="text-secondary" style={{ fontSize: '0.875rem' }}>
                                                            🎓 {edu.board}
                                                        </span>
                                                    </div>

                                                    <div className="mb-2">
                                                        <span
                                                            className="px-3 py-1 rounded-pill"
                                                            style={{
                                                                backgroundColor: `${edu.color}10`,
                                                                color: edu.color,
                                                                fontSize: '0.875rem',
                                                                fontWeight: '500'
                                                            }}
                                                        >
                                                            {edu.score}
                                                        </span>
                                                    </div>

                                                    <p className="text-muted mt-2 mb-0" style={{ lineHeight: '1.6' }}>
                                                        {edu.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Education Summary Card */}
                            <div className="card shadow-sm border-0 mt-4 text-center" style={{ borderRadius: '16px', backgroundColor: '#f8fafc' }}>
                                <div className="card-body p-4">
                                    <h5 className="fw-bold mb-3" style={{ color: '#2563eb' }}>📊 Academic Summary</h5>
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="fw-bold" style={{ fontSize: '1.5rem', color: '#2563eb' }}>🎓</div>
                                            <small className="text-muted">B.Tech CSE</small>
                                        </div>
                                        <div className="col-4">
                                            <div className="fw-bold" style={{ fontSize: '1.5rem', color: '#16a34a' }}>75%</div>
                                            <small className="text-muted">Class 12th</small>
                                        </div>
                                        <div className="col-4">
                                            <div className="fw-bold" style={{ fontSize: '1.5rem', color: '#e11d48' }}>80%</div>
                                            <small className="text-muted">Class 10th</small>
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
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
                }
                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                .card {
                    animation: fadeInLeft 0.5s ease-out forwards;
                    opacity: 0;
                }
                .card:nth-child(1) { animation-delay: 0.1s; }
                .card:nth-child(2) { animation-delay: 0.2s; }
                .card:nth-child(3) { animation-delay: 0.3s; }
            `}</style>
        </>
    );
}