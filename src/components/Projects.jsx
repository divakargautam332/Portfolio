import { Link } from 'react-router-dom';

export default function Projects() {
    const projects = [
        {
            id: 'chat-application',
            title: "💬 Real-Time Chat Application",
            shortDesc: "A modern real-time chat application with instant messaging and group chats",
            techStack: "MERN Stack | Socket.io | Tailwind CSS | JWT | MongoDB",
            features: ["Real-time Messaging", "Group Chats", "Online Status", "File Sharing", "Message Reactions", "Read Receipts"],
            color: "#8b5cf6",
            isNew: true
        },
        {
            id: 'employee-management-system',
            title: "🏢 Employee Management System",
            shortDesc: "A complete production-ready enterprise-grade Employee Management System",
            techStack: "MongoDB | Express.js | React.js | Node.js | Tailwind CSS | JWT | Socket.io",
            features: ["Employee CRUD", "Leave Management", "Attendance Tracking", "Task Management"],
            color: "#2563eb",
            isNew: false
        },
        {
            id: 'dry-clean-management',
            title: "🧺 Dry Clean Management System",
            shortDesc: "A full-stack dry cleaning and laundry management system",
            techStack: "MongoDB | Express.js | React.js | Node.js | Tailwind CSS | JWT | Razorpay",
            features: ["User Auth", "Order Placement", "Payment Gateway", "Admin Dashboard"],
            color: "#16a34a",
            isNew: false
        },
        {
            id: 'airbnb-clone',
            title: "🏠 Airbnb Full-Stack Project",
            shortDesc: "A full-stack Airbnb clone with authentication and booking system",
            techStack: "React.js | Node.js | Express.js | MongoDB | CSS3 | JWT",
            features: ["User Auth", "Property Listings", "Booking System", "Search & Filters"],
            color: "#e11d48",
            isNew: false
        },
        {
            id: 'weather-app',
            title: "⛅ Weather App",
            shortDesc: "A simple weather application with real-time data",
            techStack: "React.js | OpenWeather API | CSS3 | Axios",
            features: ["Real-time Temp", "Humidity", "Wind Speed", "City Search"],
            color: "#f59e0b",
            isNew: false
        },
        {
            id: 'screen-share-app',
            title: "🖥️ Screen Share Test App",
            shortDesc: "Real-time screen sharing application",
            techStack: "React.js | WebRTC API | MediaStream API | CSS3",
            features: ["Screen Capture", "Audio Support", "Real-time Streaming", "Stop Sharing"],
            color: "#8b5cf6",
            isNew: false
        },
        {
            id: 'student-management-system',
            title: "🎓 Student Management System",
            shortDesc: "C program for managing student records",
            techStack: "C Programming | File Handling | Data Structures",
            features: ["Add Records", "Update Records", "Delete Records", "Search Students"],
            color: "#06b6d4",
            isNew: false
        }
    ];

    return (
        <section id="projects" className="py-5">
            <div className="container">
                <h2 className="fw-bold text-center mb-5" style={{ fontSize: '2.5rem' }}>🚀 Projects</h2>
                <div className="row justify-content-center">
                    {projects.map((project, index) => (
                        <div className="col-md-10 mb-4" key={index}>
                            <Link to={`/projects/${project.id}`} className="text-decoration-none">
                                <div className="card shadow-lg h-100 border-0 hover-effect">
                                    <div className="card-body p-4">
                                        <div className="d-flex justify-content-between align-items-start flex-wrap mb-3">
                                            <div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <h4 className="card-title fw-bold" style={{ color: project.color, fontSize: '1.5rem' }}>
                                                        {project.title}
                                                    </h4>
                                                    {project.isNew && (
                                                        <span className="badge bg-danger px-2 py-1" style={{ fontSize: '0.65rem' }}>
                                                            NEW
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-muted mb-2">
                                                    {project.shortDesc}
                                                </p>
                                            </div>
                                            <span className="badge px-3 py-2" style={{ backgroundColor: project.color, fontSize: '0.75rem' }}>⭐ View Details</span>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-md-7">
                                                <p className="fw-semibold mb-1" style={{ color: '#374151' }}>📌 Project Overview:</p>
                                                <p className="text-muted small">
                                                    {project.shortDesc}
                                                </p>
                                            </div>
                                            <div className="col-md-5">
                                                <p className="fw-semibold mb-1" style={{ color: '#374151' }}>🚀 Tech Stack:</p>
                                                <p className="text-muted small">
                                                    {project.techStack}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="fw-semibold mb-1 mt-2" style={{ color: '#374151' }}>✨ Key Features:</p>
                                        <div className="row text-muted small mb-3">
                                            {project.features.map((feature, idx) => (
                                                <div className="col-md-3" key={idx}>
                                                    <ul className="mb-0">
                                                        <li>✅ {feature}</li>
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-3">
                                            <span className="btn btn-primary btn-sm px-4 py-2" style={{ backgroundColor: project.color, border: 'none' }}>
                                                🔍 Click to View Details →
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .hover-effect {
                    transition: all 0.3s ease;
                }
                .hover-effect:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
                }
                .card {
                    cursor: pointer;
                }
                .badge.bg-danger {
                    background-color: #ef4444 !important;
                }
            `}</style>
        </section>
    );
}