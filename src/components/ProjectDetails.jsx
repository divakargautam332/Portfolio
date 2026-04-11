import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode, FaMobileAlt, FaServer, FaDatabase, FaCloud, FaLock, FaEnvelope } from 'react-icons/fa';

export default function ProjectDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Projects Data`
    const projectsData = {
        'chat-application': {
            id: 'chat-application',
            title: "Real-Time Chat Application",
            shortDesc: "A modern real-time chat application with instant messaging and group chats",
            fullDescription: `A comprehensive real-time chat application built with MERN stack and Socket.io. 
            This application provides seamless communication with instant messaging, group chats, file sharing, 
            message reactions, read receipts, typing indicators, and online status tracking.`,

            problemStatement: `Traditional messaging apps lack real-time capabilities and modern features. 
            Users need a fast, reliable, and feature-rich chat platform that works across all devices.`,

            solution: `Built a full-stack chat application with WebSocket connections for real-time communication. 
            Implemented JWT authentication, online/offline status tracking, and responsive design for all devices.`,

            techStack: [
                { name: "React.js", icon: FaCode, color: "#61dafb" },
                { name: "Node.js", icon: FaServer, color: "#68a063" },
                { name: "Express.js", icon: FaServer, color: "#ffffff" },
                { name: "MongoDB", icon: FaDatabase, color: "#47A248" },
                { name: "Socket.io", icon: FaCloud, color: "#010101" },
                { name: "Tailwind CSS", icon: FaCode, color: "#38bdf8" },
                { name: "JWT", icon: FaLock, color: "#ff6b6b" },
                { name: "React Router", icon: FaCode, color: "#ca4245" }
            ],

            features: [
                "💬 Real-time Messaging - Instant message delivery with Socket.io",
                "👥 Group Chats - Create and manage group conversations",
                "🟢 Online Status - See who's online/offline in real-time",
                "📎 File Sharing - Share images, videos, and documents",
                "😊 Message Reactions - React to messages with emojis",
                "✓ Read Receipts - Know when messages are read",
                "⌨️ Typing Indicators - See when someone is typing",
                "🔍 Message Search - Search through conversation history",
                "👤 User Profiles - Customizable user profiles",
                "🌙 Dark Mode - Light/Dark theme support"
            ],

            github: "https://github.com/divakargautam332/chat-application",
            demo: "https://chat-app-demo.netlify.app",
            liveApi: "https://chat-api.onrender.com",

            challenges: [
                "Implementing real-time communication with Socket.io",
                "Managing online/offline status across multiple devices",
                "Handling message delivery and read receipts",
                "File upload and sharing optimization",
                "Scaling WebSocket connections for multiple users"
            ],

            learnings: [
                "WebSocket programming with Socket.io",
                "Real-time state management",
                "JWT authentication with refresh tokens",
                "MongoDB aggregation for chat history",
                "Responsive chat UI design",
                "Handling offline/online scenarios"
            ],

            futureScope: [
                "Video and voice calling",
                "End-to-end encryption",
                "Message scheduling",
                "AI-powered chat suggestions",
                "Screen sharing integration",
                "Mobile app with React Native"
            ]
        },
        'employee-management-system': {
            id: 'employee-management-system',
            title: "Employee Management System",
            shortDesc: "Complete production-ready enterprise-grade Employee Management System",
            fullDescription: `A comprehensive Employee Management System built with MERN stack and Tailwind CSS. 
            This application provides complete workforce management solution with role-based access control, 
            leave management, attendance tracking, task assignment, performance reviews, and real-time notifications.`,

            problemStatement: `Managing employee data, leaves, attendance, and performance manually is time-consuming 
            and error-prone. This system automates all HR processes and provides a centralized platform for workforce management.`,

            solution: `Built a full-stack application with separate dashboards for Admin, HR, Manager, and Employee roles. 
            Implemented JWT authentication, real-time updates using Socket.io, and responsive design for all devices.`,

            techStack: [
                { name: "React.js", icon: FaCode, color: "#61dafb" },
                { name: "Node.js", icon: FaServer, color: "#68a063" },
                { name: "Express.js", icon: FaServer, color: "#ffffff" },
                { name: "MongoDB", icon: FaDatabase, color: "#47A248" },
                { name: "Tailwind CSS", icon: FaCode, color: "#38bdf8" },
                { name: "JWT", icon: FaLock, color: "#ff6b6b" },
                { name: "Socket.io", icon: FaCloud, color: "#010101" },
                { name: "React Router", icon: FaCode, color: "#ca4245" }
            ],

            features: [
                "👥 Employee Directory - Complete CRUD operations with search and filters",
                "📅 Leave Management - Request, approve/reject leaves with balance tracking",
                "⏱️ Attendance Tracking - GPS-enabled check-in/check-out with location",
                "✅ Task Management - Assign tasks, track progress, and manage subtasks",
                "📊 Performance Reviews - Conduct and track employee evaluations",
                "📢 Announcements - Company-wide announcements with targeting",
                "📈 Payroll Reports - Generate salary reports and deductions",
                "🔐 Role-based Access - Admin, HR, Manager, Employee dashboards",
                "📝 Audit Logs - Complete activity tracking for compliance",
                "🔔 Real-time Notifications - Socket.io for instant updates"
            ],

            images: [
                "/projects/ems/dashboard.png",
                "/projects/ems/employees.png",
                "/projects/ems/leave.png"
            ],

            github: "https://github.com/divakargautam332/employee-management-system",
            demo: "https://ems-demo.netlify.app",
            liveApi: "https://ems-api.onrender.com",

            challenges: [
                "Implementing role-based access control across different user types",
                "Real-time notifications using Socket.io",
                "Location-based attendance tracking",
                "Leave balance calculation with carry-forward logic"
            ],

            learnings: [
                "Advanced MongoDB aggregation pipelines",
                "JWT authentication and refresh tokens",
                "Real-time features with Socket.io",
                "Responsive design with Tailwind CSS",
                "REST API best practices"
            ],

            futureScope: [
                "Mobile app with React Native",
                "Biometric attendance integration",
                "AI-based performance predictions",
                "Chat system between employees",
                "Advanced analytics dashboard"
            ]
        },

        'dry-clean-management': {
            id: 'dry-clean-management',
            title: "Dry Clean Management System",
            shortDesc: "Full-stack dry cleaning and laundry management platform",
            fullDescription: `A complete dry cleaning and laundry management system with user authentication, 
            order placement, service booking, admin dashboard, payment integration, and delivery staff management.`,

            problemStatement: `Dry cleaning businesses struggle with manual order management, payment tracking, 
            and delivery coordination. This system digitizes the entire workflow.`,

            solution: `Built a MERN stack application with Razorpay payment integration, real-time order tracking, 
            and role-based dashboards for customers, admins, and delivery staff.`,

            techStack: [
                { name: "React.js", icon: FaCode, color: "#61dafb" },
                { name: "Node.js", icon: FaServer, color: "#68a063" },
                { name: "Express.js", icon: FaServer, color: "#ffffff" },
                { name: "MongoDB", icon: FaDatabase, color: "#47A248" },
                { name: "Tailwind CSS", icon: FaCode, color: "#38bdf8" },
                { name: "Razorpay", icon: FaMobileAlt, color: "#0a2b3e" },
                { name: "JWT", icon: FaLock, color: "#ff6b6b" }
            ],

            features: [
                "👤 User Authentication - Login/Register with JWT",
                "📦 Order Placement - Book laundry services online",
                "💳 Payment Integration - Razorpay payment gateway",
                "📊 Admin Dashboard - Manage orders and services",
                "🚚 Delivery Management - Assign and track deliveries",
                "⭐ Reviews & Ratings - Customer feedback system",
                "🎟️ Coupon System - Discount coupons and offers",
                "📱 Responsive Design - Works on all devices"
            ],

            github: "https://github.com/divakargautam332/dry-clean-shop",
            demo: "https://dry-clean-demo.netlify.app",

            challenges: [
                "Integrating Razorpay payment gateway",
                "Real-time order status updates",
                "Managing delivery staff assignments"
            ],

            learnings: [
                "Payment gateway integration",
                "Real-time order tracking",
                "Role-based dashboards",
                "Email notifications"
            ],

            futureScope: [
                "SMS notifications",
                "Loyalty points system",
                "Schedule-based pickup",
                "Mobile app development"
            ]
        },

        'airbnb-clone': {
            id: 'airbnb-clone',
            title: "Airbnb Full-Stack Clone",
            shortDesc: "Complete property rental platform with booking system",
            fullDescription: `A full-stack Airbnb clone with property listings, user authentication, 
            booking system, advanced filters, and payment integration.`,

            techStack: [
                { name: "React.js", icon: FaCode, color: "#61dafb" },
                { name: "Node.js", icon: FaServer, color: "#68a063" },
                { name: "Express.js", icon: FaServer, color: "#ffffff" },
                { name: "MongoDB", icon: FaDatabase, color: "#47A248" },
                { name: "CSS3", icon: FaCode, color: "#2965f1" }
            ],

            features: [
                "🔐 User Authentication - Login/Signup",
                "🏘️ Property Listings - Browse and search properties",
                "🔍 Search & Filters - Location, price, amenities",
                "📅 Booking System - Reserve properties with dates",
                "⭐ User Reviews - Rate and review properties",
                "👤 User Profiles - Manage listings and bookings"
            ],

            github: "https://github.com/divakargautam332/Airbnb-project",
            demo: "https://airbnb-project.onrender.com"
        },

        'weather-app': {
            id: 'weather-app',
            title: "Weather App",
            shortDesc: "Real-time weather application with API integration",
            fullDescription: `A simple weather application that fetches real-time weather data using OpenWeather API. 
            Displays temperature, humidity, wind speed, and weather conditions for any searched city.`,

            techStack: [
                { name: "React.js", icon: FaCode, color: "#61dafb" },
                { name: "OpenWeather API", icon: FaCloud, color: "#ff9800" },
                { name: "CSS3", icon: FaCode, color: "#2965f1" },
                { name: "Axios", icon: FaServer, color: "#5a29e4" }
            ],

            features: [
                "🌡️ Real-time Temperature",
                "💧 Humidity Data",
                "🌬️ Wind Speed",
                "🔍 City Search",
                "🌈 Dynamic Background",
                "📱 Responsive Design"
            ],

            github: "https://github.com/divakargautam332/WeatherApp",
            demo: "https://weather-app-demo.netlify.app"
        },

        'screen-share-app': {
            id: 'screen-share-app',
            title: "Screen Share Test App",
            shortDesc: "Real-time screen sharing application",
            fullDescription: `A simple screen sharing application to test real-time screen broadcasting 
            and collaboration features using modern web APIs.`,

            techStack: [
                { name: "React.js", icon: FaCode, color: "#61dafb" },
                { name: "WebRTC API", icon: FaCloud, color: "#ff5722" },
                { name: "MediaStream API", icon: FaMobileAlt, color: "#4caf50" },
                { name: "CSS3", icon: FaCode, color: "#2965f1" }
            ],

            features: [
                "🖥️ Screen Capture",
                "🎥 Audio Support",
                "🔊 Volume Control",
                "📱 Responsive Design",
                "⚡ Real-time Streaming",
                "🛑 Stop Sharing",
                "🌐 Cross-browser Support"
            ],

            github: "https://github.com/divakargautam332/Screen-Share-Test-App",
            demo: "https://screen-share-test.vercel.app"
        },

        'student-management-system': {
            id: 'student-management-system',
            title: "Student Management System",
            shortDesc: "C program for managing student records",
            fullDescription: `A C language project for managing student records including adding, updating, 
            deleting, and displaying student data with file handling for persistent storage.`,

            techStack: [
                { name: "C Programming", icon: FaCode, color: "#00599c" },
                { name: "File Handling", icon: FaDatabase, color: "#f7df1e" },
                { name: "Data Structures", icon: FaServer, color: "#ff6b6b" }
            ],

            features: [
                "➕ Add Student Records",
                "✏️ Update Records",
                "❌ Delete Records",
                "📋 Display All Records",
                "🔍 Search Students",
                "💾 File Storage",
                "📊 Grade Calculation",
                "🖨️ Print Reports"
            ],

            github: "https://github.com/divakargautam332/student-_managment_in_c-",
            demo: null
        }
    };

    const project = projectsData[id];

    if (!project) {
        return (
            <section className="py-5 text-center" style={{ minHeight: '70vh' }}>
                <div className="container">
                    <h1 className="display-4 fw-bold mb-3" style={{ color: '#2563eb' }}>404</h1>
                    <h2 className="mb-3">Project Not Found</h2>
                    <p className="text-muted mb-4">The project you're looking for doesn't exist.</p>
                    <Link to="/projects" className="btn btn-primary btn-lg">
                        <FaArrowLeft className="me-2" /> Back to Projects
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="py-5" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)" }}>
            <div className="container">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/projects')}
                    className="btn btn-outline-primary mb-4"
                    style={{ borderRadius: '8px' }}
                >
                    <FaArrowLeft className="me-2" /> Back to Projects
                </button>

                {/* Project Title */}
                <div className="text-center mb-5">
                    <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: '#1f2937' }}>
                        {project.title}
                    </h1>
                    <p className="lead text-muted" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {project.shortDesc}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="card shadow-sm border-0 mb-4" style={{ borderRadius: '16px' }}>
                    <div className="card-body p-4">
                        <h3 className="fw-bold mb-3" style={{ color: '#2563eb' }}>🚀 Tech Stack</h3>
                        <div className="d-flex flex-wrap gap-3">
                            {project.techStack.map((tech, idx) => {
                                const Icon = tech.icon;
                                return (
                                    <span
                                        key={idx}
                                        className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill"
                                        style={{
                                            backgroundColor: `${tech.color}15`,
                                            color: tech.color,
                                            border: `1px solid ${tech.color}30`
                                        }}
                                    >
                                        <Icon size={16} />
                                        {tech.name}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Description Grid */}
                <div className="row g-4 mb-4">
                    {/* Full Description */}
                    <div className="col-md-6">
                        <div className="card shadow-sm border-0 h-100" style={{ borderRadius: '16px' }}>
                            <div className="card-body p-4">
                                <h4 className="fw-bold mb-3" style={{ color: '#2563eb' }}>📌 Project Overview</h4>
                                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                                    {project.fullDescription}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Problem Statement */}
                    {project.problemStatement && (
                        <div className="col-md-6">
                            <div className="card shadow-sm border-0 h-100" style={{ borderRadius: '16px' }}>
                                <div className="card-body p-4">
                                    <h4 className="fw-bold mb-3" style={{ color: '#e11d48' }}>🎯 Problem Statement</h4>
                                    <p className="text-muted" style={{ lineHeight: '1.8' }}>
                                        {project.problemStatement}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Solution */}
                {project.solution && (
                    <div className="card shadow-sm border-0 mb-4" style={{ borderRadius: '16px' }}>
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-3" style={{ color: '#16a34a' }}>💡 Solution</h4>
                            <p className="text-muted" style={{ lineHeight: '1.8' }}>
                                {project.solution}
                            </p>
                        </div>
                    </div>
                )}

                {/* Key Features */}
                <div className="card shadow-sm border-0 mb-4" style={{ borderRadius: '16px' }}>
                    <div className="card-body p-4">
                        <h3 className="fw-bold mb-3" style={{ color: '#2563eb' }}>✨ Key Features</h3>
                        <div className="row">
                            {project.features.map((feature, idx) => (
                                <div className="col-md-6 mb-2" key={idx}>
                                    <div className="d-flex align-items-center">
                                        <span className="me-2">✅</span>
                                        <span className="text-muted">{feature}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Challenges & Learnings */}
                <div className="row g-4 mb-4">
                    {project.challenges && (
                        <div className="col-md-6">
                            <div className="card shadow-sm border-0 h-100" style={{ borderRadius: '16px' }}>
                                <div className="card-body p-4">
                                    <h4 className="fw-bold mb-3" style={{ color: '#f59e0b' }}>⚠️ Challenges Faced</h4>
                                    <ul className="text-muted" style={{ lineHeight: '1.8' }}>
                                        {project.challenges.map((challenge, idx) => (
                                            <li key={idx}>{challenge}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {project.learnings && (
                        <div className="col-md-6">
                            <div className="card shadow-sm border-0 h-100" style={{ borderRadius: '16px' }}>
                                <div className="card-body p-4">
                                    <h4 className="fw-bold mb-3" style={{ color: '#8b5cf6' }}>📚 Key Learnings</h4>
                                    <ul className="text-muted" style={{ lineHeight: '1.8' }}>
                                        {project.learnings.map((learning, idx) => (
                                            <li key={idx}>{learning}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Future Scope */}
                {project.futureScope && (
                    <div className="card shadow-sm border-0 mb-4" style={{ borderRadius: '16px' }}>
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-3" style={{ color: '#06b6d4' }}>🔮 Future Scope</h4>
                            <div className="d-flex flex-wrap gap-2">
                                {project.futureScope.map((item, idx) => (
                                    <span key={idx} className="px-3 py-2 rounded-pill" style={{ backgroundColor: '#e0e7ff', color: '#2563eb' }}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="text-center mt-4">
                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-dark btn-lg px-5"
                            style={{ borderRadius: '8px' }}
                        >
                            <FaGithub className="me-2" /> GitHub Repository
                        </a>
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg px-5"
                                style={{ backgroundColor: '#2563eb', border: 'none', borderRadius: '8px' }}
                            >
                                <FaExternalLinkAlt className="me-2" /> Live Demo
                            </a>
                        )}
                    </div>
                    {project.liveApi && (
                        <p className="text-muted mt-3 small">
                            API: <a href={project.liveApi} target="_blank" rel="noopener noreferrer">{project.liveApi}</a>
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}