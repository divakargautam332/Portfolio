export default function Projects() {
    return (
        <>
            <section id="projects" className="py-5">
                <div className="container">
                    <h2 className="fw-bold text-center mb-4">Projects</h2>
                    <div className="row justify-content-center">
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
                                    <p>React, Node.js, Express.js, MongoDB</p>
                                    <div className="d-flex gap-3 mt-3">
                                        <a href="#" className="btn btn-primary btn-sm">GitHub</a>
                                        <a href="#" className="btn btn-outline-primary btn-sm">Live Demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                        <a href="#" className="btn btn-primary btn-sm">GitHub</a>
                                        <a href="#" className="btn btn-outline-primary btn-sm">Live Demo</a>
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
