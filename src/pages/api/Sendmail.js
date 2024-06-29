// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
       service: 'gmail',
        auth: {
          user: 'tr.gurjant@gmail.com',
          pass: 'vmku sncr bken hntd'
        }
      });

      // Get form data from request body
      const { fullName, email, phoneNumber, jobRequirements } = req.body;

      // Create email body
      const mailOptions = {
        from: 'tr.gurjant@gmail.com', // sender address
        to: 'hireharmonysolution@gmail.com', // list of receivers
        subject: 'New Job Consultancy Form Submission',
        html: `
        <h3 style="text-align: center; color: blue;">Hi, I'm ${fullName}, and I'm looking for a job...</h3>
    <p style="text-align: center;">Thank you for considering my application. Below are the details of my submission:</p>
    <ul>
        <li><strong>Full Name:</strong> ${fullName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone Number:</strong> ${phoneNumber}</li>
        <li><strong>Job Requirements:</strong> ${jobRequirements}</li>
    </ul>
    <p>Please find attached my resume for further review.</p>
        
        `,
        attachments: [
          {
            filename: req.body.resume.name,
            content: req.body.resume.buffer,
            encoding: 'base64'
          }
        ]
      };

      // Send mail
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
