import nodemailer from "nodemailer";
import config from "../env.js";
class EmailService {
  #transporter;
  constructor() {
    this.#transporter = nodemailer.createTransport(config.MAIL);
  }

  async sendEmail({ to, subject, html, attachments = [] }) {
    await this.#transporter.sendMail({
      from: `"CoderIntegrador", <${config.MAIL.auth.user}>`,
      to,
      subject,
      html,
      attachments,
    });
  }
}
const instance = new EmailService();
Object.freeze(instance);
export default instance;
