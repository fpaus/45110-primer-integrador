import { Router } from "express";
import coursesManager from "../dao/courses.manager.js";
import usersManager from "../dao/users.manager.js";
import ViewsController from "../controllers/views.controller.js";

const controller = new ViewsController();
const router = Router();

router.get("/", controller.renderUsers.bind(controller));

router.get("/courses", controller.renderCourses.bind(controller));

export default router;
