import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('users', {
    title: 'Usuarios',
  });
});

router.get('/courses', (req, res) => {
  res.render('courses', {
    title: 'Cursos',
  });
});

export default router;
