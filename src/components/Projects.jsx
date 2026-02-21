export default function Projects() {
    return (
        <>
            <section id="projects" className="py-5">
                <div className="container">
                    <h2 className="fw-bold text-center mb-4">Projects</h2>
                    <div className="row justify-content-center">
                        {/* Airbnb Project */}
                        <div className="col-md-5 mb-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <h4 className="card-title fw-bold">Airbnb Full-Stack Project</h4>
                                    <p className="text-muted">
                                        A full-stack Airbnb clone built using React, Node.js, Express,
                                        and MongoDB. Includes user authentication, property listing,
                                        booking system, and filters.
                                    </p>
                                    <p className="fw-semibold mb-1">Tech Used:</p>
                                    <p>HTML CSS JS, Node.js, Express.js, MongoDB</p>
                                    <div className="d-flex gap-3 mt-3">
                                        <a href="https://github.com/divakargautam332/Airbnb-project" className="btn btn-primary btn-sm">GitHub</a>
                                        <a href="https://airbnb-project-1-441e.onrender.com/" className="btn btn-outline-primary btn-sm">Live Demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Weather App */}
                        <div className="col-md-5 mb-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <h4 className="card-title fw-bold">Weather App</h4>
                                    <p className="text-muted">
                                        A simple weather application built with React. It fetches
                                        real-time weather data using an API and displays temperature,
                                        humidity, and conditions of any searched city.
                                    </p>
                                    <p className="fw-semibold mb-1">Tech Used:</p>
                                    <p>React, Weather API</p>
                                    <div className="d-flex gap-3 mt-3">
                                        <a href="https://github.com/divakargautam332/WeatherApp" className="btn btn-primary btn-sm">GitHub</a>
                                        <a href="https://celebrated-flan-6f41d1.netlify.app/" className="btn btn-outline-primary btn-sm">Live Demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Screen Share Test App */}
                        <div className="col-md-5 mb-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <h4 className="card-title fw-bold">Screen Share Test App</h4>
                                    <p className="text-muted">
                                        A simple screen sharing application to test real-time screen
                                        broadcasting and collaboration features. Built for learning purposes.
                                    </p>
                                    <p className="fw-semibold mb-1">Tech Used:</p>
                                    <p>React, Web API</p>
                                    <div className="d-flex gap-3 mt-3">
                                        <a href="https://github.com/divakargautam332/Screen-Share-Test-App" className="btn btn-primary btn-sm">GitHub</a>
                                        <a href="https://screen-share-test-6zxf9hljk-divakargautam332s-projects.vercel.app/" className="btn btn-outline-primary btn-sm">Live Demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Student Management System */}
                        <div className="col-md-5 mb-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <h4 className="card-title fw-bold">Student Management System</h4>
                                    <p className="text-muted">
                                        A C language project for managing student records including
                                        adding, updating, deleting, and displaying student data.
                                    </p>
                                    <p className="fw-semibold mb-1">Tech Used:</p>
                                    <p>C Programming, File Handling</p>
                                    <div className="d-flex gap-3 mt-3">
                                        <a href="https://github.com/divakargautam332/student-_managment_in_c-" className="btn btn-primary btn-sm">GitHub</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}