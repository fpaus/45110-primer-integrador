import { FileManager } from './file.manager.js';

class Courses {
  #persistencia;
  constructor(persistencia) {
    this.#persistencia = persistencia;
  }

  async getAll() {
    return this.#persistencia.getAll();
  }

  async save(course) {
    return this.#persistencia.save(course);
  }
}
const instancia = new Courses(new FileManager('courses.json'));
export default instancia;
