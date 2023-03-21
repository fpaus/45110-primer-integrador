import { Router } from 'express';
import coursesManager from '../dao/courses.manager.js';

const router = Router();

router.get('/', async (req, res) => {
  const courses = await coursesManager.getAll();
  res.send({ courses });
});

router.post('/', async (req, res) => {
  const data = req.body;
  const newCourse = await coursesManager.save(data);
  re.send({ course: newCourse });
});

export default router;
