export class MongoManager {
  constructor(model) {
    this.model = model;
  }

  async getAll(filters = {}) {
    const { skip, limit, ...query } = filters;

    try {
      const entidades = await this.model.paginate(query, {
        offset: Number(skip ?? 0),
        limit: Number(limit ?? 10),
        lean: true,
      });
      return entidades;
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

  async get(id) {
    try {
      const entity = await this.model.findById(id);
      return entity.toObject();
    } catch (error) {
      throw error;
    }
  }
}
