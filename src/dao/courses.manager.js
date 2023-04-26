import coursesModel from './models/courses.model.js';
import { MongoManager } from './mongo.manager.js';

class Courses {
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
const instancia = new Courses(new MongoManager(coursesModel));
export default instancia;
