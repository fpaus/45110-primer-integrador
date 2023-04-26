import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { userCollection } from './user.model.js';

const coursesCollection = 'courses';

const coursesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
  teacher: { type: String, required: true },
  students: {
    type: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: userCollection,
        },
      },
    ],
    default: [],
  },
});

coursesSchema.plugin(mongoosePaginate);

coursesSchema.pre('findOne', function () {
  this.populate('students.user');
});

const coursesModel = mongoose.model(coursesCollection, coursesSchema);
export default coursesModel;
