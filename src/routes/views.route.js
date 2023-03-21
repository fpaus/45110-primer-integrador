import { Router } from 'express';
import coursesManager from '../dao/courses.manager.js';
import usersManager from '../dao/users.manager.js';

const router = Router();

router.get('/', async (req, res) => {
  const users = await usersManager.getAll();
  res.render('users', {
    title: 'Usuarios',
    users,
  });
});

router.get('/courses', async (req, res) => {
  const courses = await coursesManager.getAll();
  res.render('courses', {
    title: 'Cursos',
    courses,
  });
});

export default router;
