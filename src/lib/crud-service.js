export default class CrudService {
  _persistencia;
  constructor(persistencia) {
    this._persistencia = persistencia;
  }
  async getAll() {
    return this._persistencia.getAll();
  }
  async getById(id) {
    return this._persistencia.getById(id);
  }
  async save(data) {
    return this._persistencia.create(data);
  }
  async update(id, data) {
    return this._persistencia.update(id, data);
  }
  async delete(id) {
    return this._persistencia.delete(id);
  }
}
