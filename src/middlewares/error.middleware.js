import CustomError from "../errors/error.js";
export default (error, req, res, next) => {
  if (error instanceof CustomError) {
    switch (error.code) {
      case 400:
        res.badRequestResponse(error.message);
        break;
      case 401:
        res.notAuthorizedResponse(error.message);
        break;
      case 403:
        res.notAuthenticatedResponse(error.message);
        break;
      case 404:
        res.notFoundResponse(error.message);
        break;
      case 500:
        res.internalServerErrorResponse(error.message);
        break;
    }
  } else {
    console.log(error);
    res.internalServerErrorResponse("Unhandled error");
  }
};
