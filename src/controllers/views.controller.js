import CoursesService from "../dao/services/courses.service.js";
import UsersService from "../dao/services/users.service.js";

export default class ViewsController {
  constructor() {
    this._userService = new UsersService();
    this._courseService = new CoursesService();
  }

  async renderUsers(req, res, next) {
    const users = await this._userService.getAll(req.query);
    res.render("users", {
      title: "Usuarios",
      users: users.docs,
    });
  }

  async renderCourses(req, res, next) {
    const courses = await this._courseService.getAll();
    res.render("courses", {
      title: "Cursos",
      courses,
    });
  }
}
