import { Router } from 'express';
import coursesManager from '../dao/courses.manager.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const courses = await coursesManager.getAll();
    res.send({ courses });
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
