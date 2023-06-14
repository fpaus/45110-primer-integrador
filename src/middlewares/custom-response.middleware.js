export default (req, res, next) => {
  res.okResponse = (data) => {
    res.status(200).send({ status: "success", payload: data });
  };
  res.createdResponse = (data) => {
    res.status(201).send({ status: "success", error: data });
  };
  res.notFoundResponse = (message) => {
    res.status(404).send({ status: "error", error: message });
  };
  res.notAuthorizedResponse = (message) => {
    res.status(401).send({ status: "error", error: message });
  };
  res.notAuthenticatedResponse = (message) => {
    res.status(403).send({ status: "error", error: message });
  };
  res.badRequestResponse = (message) => {
    res.status(400).send({ status: "error", error: message });
  };
  res.internalServerErrorResponse = (message) => {
    res.status(500).send({ status: "error", error: message });
  };
  next();
};
