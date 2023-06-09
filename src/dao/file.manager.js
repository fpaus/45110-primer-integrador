import * as fs from 'fs';
import fileDirName from '../utils.js';
const { __dirname } = fileDirName(import.meta);
export class FileManager {
  constructor(path) {
    this.path = __dirname + '/' + path;
  }

  async getAll() {
    try {
      const entidades = await fs.promises.readFile(this.path);
      return JSON.parse(entidades);
    } catch (e) {
      return [];
    }
  }

  async create(entity) {
    const allEntities = await this.getAll();
    console.log(entity);
    const stringified = JSON.stringify([...allEntities, entity], null, 2);
    await fs.promises.writeFile(this.path, stringified);
    return entity;
  }
}
