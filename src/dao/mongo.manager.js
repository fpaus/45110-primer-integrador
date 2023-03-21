export class MongoManager {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    try {
      const entidades = await this.model.find();
      return entidades.map((e) => e.toObject());
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async create(entity) {
    try {
      const newEntity = this.model.create(entity);
      return newEntity;
    } catch (error) {
      throw error;
    }
  }
}
