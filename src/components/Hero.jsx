export default function Hero() {
    return (
        <>
            <section className="py-5" style={{ background: "#f8f9fa" }}>
                <div className="container text-center">

                    <h1 className="fw-bold display-5">
                        Hi, I'm <span className="text-primary">Divakar Gautam</span>
                    </h1>

                    <h4 className="text-secondary mt-2">
                        Full Stack Developer • Java • MERN • DSA
                    </h4>

                    <p className="mt-3 text-muted">
                        I build modern full-stack web applications using React, Node.js, Express and MongoDB.
                        I love solving DSA problems and learning new technologies.
                    </p>

                    <div className="mt-4 d-flex justify-content-center gap-3">
                        <a
                            href="https://docs.google.com/document/d/1eXZhoYFGdGksqvV0Xh17SZ1Y8qIZdyjl/edit#heading=h.rz2i7jo0mkz"
                            download
                            className="btn btn-primary btn-lg"
                            target="_blank"
                        >
                            Download Resume
                        </a>

                        <a
                            href="/projects"
                            className="btn btn-outline-primary btn-lg"
                        >
                            View Projects
                        </a>
                    </div>

                </div>
            </section>
        </>
    );
}
