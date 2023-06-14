import UsersController from "../controllers/users.controller.js";
import Router from "../lib/crud-router.js";

const controller = new UsersController();
const router = Router(controller);

export default router;
