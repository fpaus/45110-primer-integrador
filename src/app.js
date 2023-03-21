import express from 'express';
import handlebars from 'express-handlebars';
import coursesRouter from './routes/courses.route.js';
import usersRouter from './routes/users.route.js';
import viewsRouter from './routes/views.route.js';
import fileDirName from './utils.js';

const { __dirname } = fileDirName(import.meta);

const app = express();

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

app.listen(8080);
