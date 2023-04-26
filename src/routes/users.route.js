import { Router } from 'express';
import usersManager from '../dao/users.manager.js';
const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await usersManager.getAll(req.query);
    res.send({ users });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const data = req.body;
    const newUser = await usersManager.save(data);
    res.send({ user: newUser });
  } catch (error) {
    next(error);
  }
});

export default router;
