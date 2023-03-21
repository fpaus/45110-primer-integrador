import { Router } from 'express';
import usersManager from '../dao/users.manager.js';
const router = Router();

router.get('/', async (req, res) => {
  const users = await usersManager.getAll();
  res.send({ users });
});

router.post('/', async (req, res) => {
  const data = req.body;
  const newUser = await usersManager.save(data);
  res.send({ user: newUser });
});

export default router;
