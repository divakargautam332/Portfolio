import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, message } = JSON.parse(req.body);

        if (!name || !email || !message) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New message from ${name}`,
            text: message,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: "Email sent successfully!" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to send email." });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}