import CrudService from "../../lib/crud-service.js";
import getPersitence from "../managers/persistence.factory.js";
import { FileManager } from "../managers/file.manager.js";
import { MongoManager } from "../managers/mongo.manager.js";
import usersModel from "../models/user.model.js";
export default class UsersService extends CrudService {
  constructor() {
    const persistence = getPersitence({
      file: () => new FileManager("users.json"),
      mongo: () => new MongoManager(usersModel),
    });
    super(persistence);
  }
}
