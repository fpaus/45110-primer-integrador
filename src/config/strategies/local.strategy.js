import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import userModel from '../../dao/models/user.model.js';

export function localStrategy() {
  passport.use(
    'local',
    new LocalStrategy(
      {
        usernameField: 'email',
        passReqToField: true,
      },
      async (email, password, done) => {
        try {
          const user = await userModel.findOne({ email });
          if (!user) {
            return done(null, false, { message: 'Incorrect email' });
          }
          //Faltaría validar que la password sea válida
          return done(null, user);
        } catch (error) {
          done(error, false);
        }
      },
    ),
  );
}
