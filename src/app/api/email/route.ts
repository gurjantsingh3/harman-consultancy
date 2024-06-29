import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");
const fs = require("fs");

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const phoneNumber = formData.get("phoneNumber");
  const jobRequirements = formData.get("jobRequirements");
  const resume = formData.get("resume") as File;
  const data = {
    fullName,
    email,
    phoneNumber,
    jobRequirements,
    resume,
  };

  console.log(data, "data");
  const transport = nodemailer.createTransport({
    service: "gmail",
    /*
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.NEXT_PUBLIC_MY_EMAIL,
      pass: process.env.NEXT_PUBLIC_MY_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.NEXT_PUBLIC_MY_EMAIL,
    to: process.env.NEXT_PUBLIC_TO_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: "New Job Consultancy Form Submission",
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
    // attachments: [
    //   {
    //     filename: "resume.pdf",
    //     content: base64Resume,
    //     contentType: "application/pdf",
    //     contentDisposition: "attachment",
    //   },
    // ],
  };
  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err: any, info: any) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });
  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
