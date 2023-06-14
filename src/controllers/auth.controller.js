export default class AuthController {
  constructor() {}

  async login(req, res, next) {
    const user = req.user;
    const token = generateToken({
      _id: user._id,
      email: user.email,
      role: "ADMIN",
    });
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 3600000,
    });
    res.okResponse({ user: req.user });
  }
  async loginFailure(req, res, next) {
    res.notAuthorizedResponse("login failed");
  }
}
