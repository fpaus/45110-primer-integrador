import { Router } from 'express';
import coursesManager from '../dao/courses.manager.js';

const router = Router();

router.get('/', async (req, res) => {
  const courses = await coursesManager.getAll();
  res.send({ courses });
});

export default router;
