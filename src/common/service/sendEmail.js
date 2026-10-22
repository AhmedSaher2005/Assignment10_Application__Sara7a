import nodemailer from "nodemailer";
import { randomInt } from "node:crypto";
const sendEmail = async ({ to, subject, html, attachments } = {}) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ahmedahmedsaher2005@gmail.com",
      pass: "wcksguccwlujzpqr",
    },
  });
  const info = await transporter.sendMail({
    from: `"Ahmed" <ahmedahmedsaher2005@gmail.com>`,
    to,
    subject,
    html: html || "",
    attachments: attachments || [],
  });
  return info.accepted.length>0?true:false
};
export const generate_otp=async () => {
    return randomInt(100000,1000000).toString()
}
export default sendEmail;
