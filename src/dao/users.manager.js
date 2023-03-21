import usersModel from '../models/user.model.js';
import { MongoManager } from './mongo.manager.js';

class Users {
  #persistencia;
  constructor(persistencia) {
    this.#persistencia = persistencia;
  }

  async getAll() {
    return this.#persistencia.getAll();
  }

  async save(course) {
    return this.#persistencia.create(course);
  }
}

const instancia = new Users(new MongoManager(usersModel));
export default instancia;
