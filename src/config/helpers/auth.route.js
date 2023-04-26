import { Router } from 'express';
import { authenticated, authorized } from '../middlewares/auth.js';

export function authRouter() {
  const router = Router();

  router.authGet = (path, roles = [], ...handlers) =>
    router.get(path, authenticated(), authorized(roles), ...handlers);
  router.authPost = (path, roles = [], ...handlers) =>
    router.post(path, authenticated(), authorized(roles), ...handlers);

  return router;
}
