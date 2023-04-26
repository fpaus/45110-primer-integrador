import passport from 'passport';

export function authenticated() {
  return passport.authenticate('jwt');
}

export function authorized(roles = []) {
  return (req, res, next) => {
    console.log(req.user);
    if (!roles || roles.length === 0 || roles.includes(req.user.role)) {
      next();
    } else {
      res.status(403).send({
        message: `you do not have any of the required roles (${roles})`,
      });
    }
  };
}
