import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export const userCollection = 'users';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dni: Number,
  birtdate: Date,
  gender: {
    type: String,
    enum: ['M', 'F', 'X'],
  },
  courses: {
    type: Array,
    default: [],
  },
});

userSchema.plugin(mongoosePaginate);

const usersModel = mongoose.model(userCollection, userSchema);
export default usersModel;
