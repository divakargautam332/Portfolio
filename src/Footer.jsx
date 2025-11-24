export default function Footer() {
    return (
        <>
            <footer className="bg-dark text-white py-4 mt-5">
                <div className="container text-center">

                    <h5 className="fw-bold">Divakar Gautam</h5>
                    <p className="mb-2">Full Stack Developer | Java | MERN</p>

                    <div className="d-flex justify-content-center gap-3 mb-3">
                        <a
                            href="mailto:divakargautam7239@gmail.com"
                            className="text-primary text-decoration-none"
                        >
                            Email
                        </a>

                        <span>•</span>

                        <a
                            href="https://github.com/divakargautam332"
                            className="text-primary text-decoration-none"
                            target="_blank"
                        >
                            GitHub
                        </a>

                        <span>•</span>

                        <a
                            href="https://www.linkedin.com/in/divakar-gautam-57850b378"
                            className="text-primary text-decoration-none"
                            target="_blank"
                        >
                            LinkedIn
                        </a>
                    </div>

                    <p className="text-white-50 small mb-0">
                        © 2025 Divakar Gautam — All Rights Reserved
                    </p>

                </div>
            </footer>
        </>
    );
}
