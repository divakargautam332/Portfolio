import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("sending");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.status === 200) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus(""), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus(""), 5000);
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
            setTimeout(() => setStatus(""), 5000);
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        { icon: "📧", label: "Email", value: "divakargautam7900@gmail.com", link: "mailto:divakargautam7900@gmail.com" },
        { icon: "📱", label: "Phone", value: "+91 72518 67239", link: "tel:+917251867239" },
        { icon: "📍", label: "Location", value: "Bulandshahr, Uttar Pradesh, India", link: null }
    ];

    const socialLinks = [
        { name: "GitHub", url: "https://github.com/divakargautam332", icon: "🐙", color: "#333" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/divakar-gautam-5278882a9/", icon: "🔗", color: "#0a66c2" },
        { name: "Twitter", url: "https://x.com/Divakar78245613", icon: "🐦", color: "#1da1f2" },
        { name: "Instagram", url: "https://instagram.com/", icon: "📸", color: "#e4405f" }
    ];

    return (
        <section id="contact" className="py-5" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)" }}>
            <div className="container">
                <h2 className="fw-bold text-center mb-5" style={{ fontSize: '2.5rem', color: '#1f2937' }}>
                    📞 Get In Touch
                </h2>

                <div className="row g-4 justify-content-center">
                    {/* Contact Form */}
                    <div className="col-lg-6">
                        <div className="card shadow-sm border-0 h-100" style={{ borderRadius: '16px' }}>
                            <div className="card-body p-4">
                                <h4 className="fw-bold mb-4" style={{ color: '#2563eb' }}>📝 Send me a message</h4>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label fw-semibold">Your Name</label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-transparent border-end-0" style={{ borderColor: '#e5e7eb' }}>👤</span>
                                            <input
                                                type="text"
                                                className="form-control border-start-0 ps-0"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                required
                                                style={{ borderColor: '#e5e7eb' }}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-transparent border-end-0" style={{ borderColor: '#e5e7eb' }}>📧</span>
                                            <input
                                                type="email"
                                                className="form-control border-start-0 ps-0"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                required
                                                style={{ borderColor: '#e5e7eb' }}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label fw-semibold">Message</label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Your message here..."
                                            required
                                            style={{ borderColor: '#e5e7eb', borderRadius: '8px' }}
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn w-100 py-2 mt-2"
                                        disabled={loading}
                                        style={{
                                            backgroundColor: '#2563eb',
                                            border: 'none',
                                            color: 'white',
                                            borderRadius: '8px',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = '#2563eb'}
                                    >
                                        {loading ? (
                                            <span>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Sending...
                                            </span>
                                        ) : (
                                            "✉️ Send Message"
                                        )}
                                    </button>

                                    {status === "success" && (
                                        <div className="alert alert-success mt-3 text-center" role="alert">
                                            ✅ Message sent successfully! I'll get back to you soon.
                                        </div>
                                    )}

                                    {status === "error" && (
                                        <div className="alert alert-danger mt-3 text-center" role="alert">
                                            ❌ Failed to send message. Please try again later.
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info & Social Links */}
                    <div className="col-lg-4">
                        <div className="card shadow-sm border-0 h-100" style={{ borderRadius: '16px' }}>
                            <div className="card-body p-4">
                                <h4 className="fw-bold mb-4" style={{ color: '#2563eb' }}>📌 Contact Info</h4>

                                {/* Contact Information */}
                                <div className="mb-4">
                                    {contactInfo.map((info, index) => (
                                        <div key={index} className="d-flex align-items-center mb-3">
                                            <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px', backgroundColor: '#e0e7ff' }}>
                                                <span style={{ fontSize: '1.2rem' }}>{info.icon}</span>
                                            </div>
                                            <div>
                                                {info.link ? (
                                                    <a href={info.link} className="text-decoration-none" style={{ color: '#4b5563' }}>
                                                        <div className="fw-semibold">{info.label}</div>
                                                        <small>{info.value}</small>
                                                    </a>
                                                ) : (
                                                    <div>
                                                        <div className="fw-semibold">{info.label}</div>
                                                        <small className="text-muted">{info.value}</small>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Social Links */}
                                <h4 className="fw-bold mb-3" style={{ color: '#2563eb' }}>🔗 Connect with me</h4>
                                <div className="d-flex flex-wrap gap-2">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn d-flex align-items-center gap-2"
                                            style={{
                                                border: `1px solid ${social.color}20`,
                                                backgroundColor: `${social.color}10`,
                                                color: social.color,
                                                borderRadius: '8px',
                                                transition: 'all 0.2s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = social.color;
                                                e.target.style.color = 'white';
                                                e.target.style.transform = 'translateY(-2px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = `${social.color}10`;
                                                e.target.style.color = social.color;
                                                e.target.style.transform = 'translateY(0)';
                                            }}
                                        >
                                            <span>{social.icon}</span>
                                            {social.name}
                                        </a>
                                    ))}
                                </div>

                                {/* Availability Status */}
                                <div className="mt-4 pt-3 border-top">
                                    <div className="d-flex align-items-center">
                                        <div className="rounded-circle me-2" style={{ width: '10px', height: '10px', backgroundColor: '#10b981' }}></div>
                                        <small className="text-muted">Available for freelance work and collaborations</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .card {
                    transition: all 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
                }
                .form-control:focus {
                    border-color: #2563eb;
                    box-shadow: 0 0 0 0.2rem rgba(37, 99, 235, 0.25);
                }
                .input-group-text {
                    border-color: #e5e7eb;
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
            `}</style>
        </section>
    );
}