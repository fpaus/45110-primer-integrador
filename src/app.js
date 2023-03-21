import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import config from '../data.js';
import coursesRouter from './routes/courses.route.js';
import usersRouter from './routes/users.route.js';
import viewsRouter from './routes/views.route.js';
import fileDirName from './utils.js';

const { PORT, MONGO_URL } = config;
const { __dirname } = fileDirName(import.meta);

const app = express();

/**mongoose */
const connection = mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/**Handlebars */
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

/**Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**Routes */
app.use('/', viewsRouter);
app.use('/api/users', usersRouter);
app.use('/api/courses', coursesRouter);

app.use((error, req, res, next) => {
  if (error.message) {
    return res.status(400).send({
      message: error.message,
    });
  }
  res.status(500).send({ error });
});

app.listen(PORT);
