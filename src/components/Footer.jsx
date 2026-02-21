import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaCode } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className="bg-dark text-white py-5 mt-5">
                <div className="container text-center">

                    <h5 className="fw-bold mb-2">Divakar Gautam</h5>
                    <p className="mb-4">Full Stack Developer | Java | MERN</p>

                    <div className="d-flex justify-content-center gap-4 flex-wrap">

                        <a
                            href="https://github.com/divakargautam332"
                            className="flex items-center gap-2 text-white hover:text-gray-400 transition-colors duration-300"
                            target="_blank"
                        >
                            <FaGithub size={24} /> GitHub
                        </a>


                        <a
                            href="https://www.linkedin.com/in/divakar-gautam-5278882a9/"
                            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors duration-300"
                            target="_blank"
                        >
                            <FaLinkedin size={24} /> LinkedIn
                        </a>


                        <a
                            href="https://www.instagram.com/divakar_gautam_169/"
                            className="flex items-center gap-2 text-white hover:text-pink-500 transition-colors duration-300"
                            target="_blank"
                        >
                            <FaInstagram size={24} /> Instagram
                        </a>


                        <a
                            href="https://leetcode.com/u/Divakar_Gautam/"
                            className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors duration-300"
                            target="_blank"
                        >
                            <FaCode size={24} /> LeetCode
                        </a>

                    </div>

                    <p className="text-white-50 small mt-4 mb-0">
                        © 2025 Divakar Gautam — All Rights Reserved
                    </p>

                </div>
            </footer>
        </>
    );
}