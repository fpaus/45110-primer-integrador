import { FileManager } from './file.manager.js';

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
const instancia = new Users(new FileManager('users.json'));
export default instancia;
