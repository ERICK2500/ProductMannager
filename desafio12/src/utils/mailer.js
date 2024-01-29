import nodemailer from 'nodemailer';
import config from '../config/config.js';
export const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth:{
        user:config.user_mail,
        pass:config.pass_mail
    },
    tls: {
        rejectUnauthorized: false // Esto desactiva la verificación de certificados SSL/TLS
    }
})