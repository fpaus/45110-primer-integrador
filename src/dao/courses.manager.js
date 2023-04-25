import coursesModel from './models/courses.model.js';
import { MongoManager } from './mongo.manager.js';

class Courses {
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
const instancia = new Courses(new MongoManager(coursesModel));
export default instancia;
