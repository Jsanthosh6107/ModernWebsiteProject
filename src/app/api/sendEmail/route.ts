// src/app/api/sendEmail/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { name, email, phone, comments } = await req.json();

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST, 
        port: Number(process.env.SMTP_PORT), 
        secure: false, // Use false for port 587
        auth: {
            user: process.env.SMTP_EMAIL, 
            pass: process.env.SMTP_PASSWORD, 
        },
        tls: {
            ciphers: 'SSLv3', // Optional: specify ciphers if needed
            rejectUnauthorized: false, // Use with caution; only for testing
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.SMTP_EMAIL, // sender address
            to: process.env.SMTP_EMAIL, // list of receivers
            subject: `New message from ${name}`, // Subject line
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nComments: ${comments}`, // plain text body
            html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Comments: ${comments}</p>`, // html body
        });
        return NextResponse.json({ status: 200, message: 'Email sent' });
    } catch (err) {
        console.error('Error sending email:', err);
        return NextResponse.json({ status: 500, message: 'Internal Server Error' });
    }
}
