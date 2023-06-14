import Router from "../lib/crud-router.js";
import CoursesController from "../controllers/courses.controller.js";

const controller = new CoursesController();
const router = Router(controller);

export default router;
