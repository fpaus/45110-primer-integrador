import passport from 'passport';
import userModel from '../dao/models/user.model.js';
import { jwtStrategy } from './strategies/jwt.strategy.js';
import { localStrategy } from './strategies/local.strategy.js';

export function configurePassport() {
  localStrategy();
  jwtStrategy();
  passport.serializeUser((user, done) => done(null, user._id));
  passport.deserializeUser(async (id, done) => {
    const user = await userModel.findOne({ _id: id });
    done(null, user);
  });
}
