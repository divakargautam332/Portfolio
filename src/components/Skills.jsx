export default function Skills() {
    const skillCategories = [
        {
            title: "💻 Programming Languages",
            icon: "🔤",
            color: "#2563eb",
            skills: ["C", "Java", "Python", "Java (DSA)", "JavaScript"]
        },
        {
            title: "🎨 Frontend Development",
            icon: "🖌️",
            color: "#e11d48",
            skills: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "JavaScript", "React.js"]
        },
        {
            title: "⚙️ Backend Development",
            icon: "🖥️",
            color: "#16a34a",
            skills: ["Node.js", "Express.js"]
        },
        {
            title: "🗄️ Database",
            icon: "📊",
            color: "#8b5cf6",
            skills: ["MongoDB", "MySQL"]
        },
        {
            title: "🛠️ Tools & Version Control",
            icon: "🔧",
            color: "#f59e0b",
            skills: ["Git", "GitHub", "VS Code", "Postman", "GitHub Actions", "CI/CD Tools"]
        },
        {
            title: "☁️ DevOps & Cloud (Basic)",
            icon: "🚀",
            color: "#06b6d4",
            skills: ["Docker", "CI/CD", "Kubernetes", "AWS", "Azure"]
        }
    ];

    return (
        <>
            <section id="skills" className="py-5" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)" }}>
                <div className="container">
                    <h2 className="fw-bold text-center mb-5" style={{ fontSize: '2.5rem', color: '#1f2937' }}>
                        🚀 My Skills
                    </h2>

                    <div className="row g-4 justify-content-center">
                        {skillCategories.map((category, index) => (
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
                                        {/* Header */}
                                        <div className="d-flex align-items-center mb-3">
                                            <div
                                                className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                                style={{
                                                    width: '50px',
                                                    height: '50px',
                                                    backgroundColor: `${category.color}15`,
                                                    fontSize: '1.5rem'
                                                }}
                                            >
                                                {category.icon}
                                            </div>
                                            <h4 className="fw-bold mb-0" style={{ color: category.color, fontSize: '1.25rem' }}>
                                                {category.title}
                                            </h4>
                                        </div>

                                        {/* Skills Tags */}
                                        <div className="d-flex flex-wrap gap-2 mt-3">
                                            {category.skills.map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className="skill-tag"
                                                    style={{
                                                        padding: '6px 14px',
                                                        backgroundColor: `${category.color}10`,
                                                        color: category.color,
                                                        borderRadius: '20px',
                                                        fontSize: '0.875rem',
                                                        fontWeight: '500',
                                                        transition: 'all 0.2s ease'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.backgroundColor = category.color;
                                                        e.target.style.color = 'white';
                                                        e.target.style.transform = 'translateY(-2px)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.backgroundColor = `${category.color}10`;
                                                        e.target.style.color = category.color;
                                                        e.target.style.transform = 'translateY(0)';
                                                    }}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Skill Level Indicator */}
                    <div className="row mt-5 justify-content-center">
                        <div className="col-md-8">
                            <div className="card shadow-sm border-0 p-4 text-center" style={{ borderRadius: '16px', backgroundColor: '#f8fafc' }}>
                                <h5 className="fw-bold mb-3" style={{ color: '#2563eb' }}>📊 Skill Proficiency</h5>
                                <div className="row">
                                    <div className="col-6 col-md-3 mb-3">
                                        <div className="fw-bold" style={{ color: '#2563eb' }}>Advanced</div>
                                        <small className="text-muted">React.js, JavaScript, Java</small>
                                    </div>
                                    <div className="col-6 col-md-3 mb-3">
                                        <div className="fw-bold" style={{ color: '#16a34a' }}>Intermediate</div>
                                        <small className="text-muted">Node.js, Express, MongoDB</small>
                                    </div>
                                    <div className="col-6 col-md-3 mb-3">
                                        <div className="fw-bold" style={{ color: '#f59e0b' }}>Learning</div>
                                        <small className="text-muted">Docker, AWS, Azure</small>
                                    </div>
                                    <div className="col-6 col-md-3 mb-3">
                                        <div className="fw-bold" style={{ color: '#e11d48' }}>Basics</div>
                                        <small className="text-muted">Kubernetes, CI/CD</small>
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
                .skill-tag {
                    cursor: default;
                    transition: all 0.2s ease;
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
                .card:nth-child(4) { animation-delay: 0.4s; }
                .card:nth-child(5) { animation-delay: 0.5s; }
                .card:nth-child(6) { animation-delay: 0.6s; }
            `}</style>
        </>
    );
}