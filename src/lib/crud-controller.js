export default class CrudController {
  _service;
  constructor(service) {
    this._service = service;
  }

  async getAll(req, res, next) {
    try {
      const items = await this._service.getAll();
      res.okResponse(items);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      const id = req.params.id;
      const item = await this._service.getById(id);
      res.okResponse(item);
    } catch (error) {
      next(error);
    }
  }
  async save(req, res, next) {
    try {
      const data = req.body;
      const newItem = await this._service.save(data);
      res.createdResponse(newItem);
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      const id = req.params.id;
      const data = req.body;
      const updatedItem = await this._service.update(id, data);
      res.okResponse(updatedItem);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      const id = req.params.id;
      await this._service.delete(id);
      res.okResponse("Deleted");
    } catch (error) {
      next(error);
    }
  }
}
