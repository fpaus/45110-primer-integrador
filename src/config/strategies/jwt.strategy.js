import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import config from "../../env.js";

export function jwtStrategy() {
  passport.use(
    "jwt",
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: config.JWT_TOKEN,
      },
      (payload, done) => {
        try {
          return done(null, payload);
        } catch (error) {
          done(error);
        }
      }
    )
  );
}

function cookieExtractor(req) {
  console.log(req.cookies);
  return req?.cookies?.["jwt"];
}
