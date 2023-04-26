import usersModel from './models/user.model.js';
import { MongoManager } from './mongo.manager.js';

class Users {
  #persistencia;
  constructor(persistencia) {
    this.#persistencia = persistencia;
  }

  async getAll(filters) {
    return this.#persistencia.getAll(filters);
  }

  async save(course) {
    return this.#persistencia.create(course);
  }

  async get(id) {
    return this.#persistencia.get(id);
  }
}

const instancia = new Users(new MongoManager(usersModel));
export default instancia;
