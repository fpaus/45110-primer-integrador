import { Router } from 'express';
import passport from 'passport';
import { generateToken } from '../utils.js';
const router = Router();

router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/api/auth/login-failure',
  }),
  async (req, res, next) => {
    const user = req.user;
    const token = generateToken({
      _id: user._id,
      email: user.email,
      role: 'ADMIN',
    });
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 3600000,
    });
    res.send({ user: req.user });
  },
);

router.get('/login-failure', (req, res) => {
  res.status(401).send({ message: 'Login failed' });
});

export default router;
