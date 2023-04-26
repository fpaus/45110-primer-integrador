import { authRouter } from '../config/helpers/auth.route.js';
import roles from '../config/roles.js';
import coursesManager from '../dao/courses.manager.js';

const router = authRouter();

router.authGet('/', [roles.ADMIN], async (req, res, next) => {
  try {
    const courses = await coursesManager.getAll(req.query);
    res.send({ courses });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const course = await coursesManager.get(req.params.id);
    res.send({ course });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const data = req.body;
    const newCourse = await coursesManager.save(data);
    res.send({ course: newCourse });
  } catch (error) {
    next(error);
  }
});

export default router;
