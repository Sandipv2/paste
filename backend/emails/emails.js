import {transporter} from '../config/nodemailer.js'
import { verificationTemplate, welcomeTemplate } from './emailTemplates.js';

export const sendVerificationMail = async (name, email, otp) => {
    try {   
        await transporter.sendMail({
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'Email verification OTP - PASTE',
            html: verificationTemplate
                .replace('{name}',name)
                .replace('{otp}', otp)
                .replace('{year}', new Date().getFullYear())
        })
    } catch(err) {
        console.error(`Error sending verification`, err);
        throw new Error('Error sending verification: ',err.message)
    }
}

export const sendWelcomeMail = async (email, name) => {
    try {
        await transporter.sendMail({
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'Welcome To PASTE!',
            html: welcomeTemplate
                .replace('{name}', name)
                .replace('{year}', new Date().getFullYear())
        })
    } catch(err) {
        console.error(`Erroor:sending welcome mail:  `, err);
        throw new Error('Erroor:sending welcome mail:  ',err.message)
    }
}