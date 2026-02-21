import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.status === 200) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus(data.message || "Failed to send message.");
            }
        } catch (err) {
            console.error(err);
            setStatus("Failed to send message.");
        }
    };

    return (
        <section id="contact" className="py-5 bg-light">
            <div className="container">
                <h2 className="fw-bold text-center mb-4">Contact Me</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <p className="text-center text-muted mb-4">
                            I’m open to opportunities and collaborations. You can reach me via email or connect on LinkedIn/GitHub.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Your Message" required></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                            </div>
                        </form>
                        {status && <p className="text-center mt-3">{status}</p>}
                        <div className="mt-4 text-center">
                            <a href="https://github.com/divakargautam332" target="_blank" className="me-3 text-decoration-none">GitHub</a>
                            <a href="https://www.linkedin.com/in/divakar-gautam-57850b378" target="_blank" className="me-3 text-decoration-none">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}