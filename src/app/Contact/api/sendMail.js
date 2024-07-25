// pages/api/sendMail.js
import nodemailer from 'nodemailer';

const sendMailHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, phone, email } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'recipient-email@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
};

export default sendMailHandler;
