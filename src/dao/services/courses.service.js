import CrudService from "../../lib/crud-service.js";
import getPersitence from "../managers/persistence.factory.js";
import { FileManager } from "../managers/file.manager.js";
import { MongoManager } from "../managers/mongo.manager.js";
import coursesModel from "../models/courses.model.js";

export default class CoursesService extends CrudService {
  constructor() {
    const persistence = getPersitence({
      file: () => new FileManager("courses.json"),
      mongo: () => new MongoManager(coursesModel),
    });
    super(persistence);
  }
}
