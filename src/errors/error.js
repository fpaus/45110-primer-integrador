export default class CustomError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

export class BadRequestError extends CustomError {
  constructor(message) {
    super(400, message);
  }
}
export class NotFoundError extends CustomError {
  constructor(message) {
    super(404, message);
  }
}
export class NotAuthenticatedError extends CustomError {
  constructor(message) {
    super(403, message);
  }
}
export class NotAuthorizedError extends CustomError {
  constructor(message) {
    super(401, message);
  }
}
export class InternalServerError extends CustomError {
  constructor(message) {
    super(500, message);
  }
}
