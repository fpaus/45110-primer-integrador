import CoursesService from "../dao/services/courses.service.js";
import CrudController from "../lib/crud-controller.js";

export default class CoursesController extends CrudController {
  constructor() {
    super(new CoursesService());
  }
}
