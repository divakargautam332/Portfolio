export default function Contact() {
    return (
        <>
            <section id="contact" class="py-5 bg-light">
                <div class="container">
                    <h2 class="fw-bold text-center mb-4">Contact Me</h2>
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <p class="text-center text-muted mb-4">
                                I’m open to opportunities and collaborations. You can reach me via email or connect on LinkedIn/GitHub.
                            </p>
                            <form>
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Your Name" />
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="Your Email" />
                                </div>
                                <div class="mb-3">
                                    <label for="message" class="form-label">Message</label>
                                    <textarea class="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
                                </div>
                            </form>
                            <div class="mt-4 text-center">
                                <a href="mailto:divakargautam7239@gmail.com" class="me-3 text-decoration-none">
                                    Email
                                </a>
                                <a href="https://github.com/divakargautam332" target="_blank" class="me-3 text-decoration-none">
                                    GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/divakar-gautam-57850b378" target="_blank" class="text-decoration-none">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
