import UsersService from "../dao/services/users.service.js";
import CrudController from "../lib/crud-controller.js";
import emailService from "../external-services/email.service.js";

export default class UsersController extends CrudController {
  constructor() {
    super(new UsersService());
  }

  async save(req, res, next) {
    await super.save(req, res, next);
    emailService.sendEmail({
      to: req.body.email,
      subject: "Welcome to CoderIntegrador",
      body: `<h1>Hello ${req.body.user}</h1>
      <img src="cid:computer" width="300" height="200" />`,
      attachments: [
        {
          filename: "computer.jpg",
          cid: "computer",
          path: "./src/public/img/computer.jpg",
        },
      ],
    });
  }
}
