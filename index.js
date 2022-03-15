const express = require('express');

const bodyParser = require('body-parser');
const userControllers = require('./controllers/userControllers');
const categoryControllers = require('./controllers/categoryControllers');
const blogPostControllers = require('./controllers/blogPostControllers');

const validateUser = require('./middlewares/validateUser');
const validateCategory = require('./middlewares/validateCategory');
const validatePost = require('./middlewares/validatePosts');
const validateToken = require('./middlewares/validateToken');

const [validateEmail, validatePassword] = validateUser;
const app = express();

app.use(bodyParser.json());

app.post('/user', validateUser, userControllers.createUser);
app.post(
  '/login',
  validateEmail,
  validatePassword,
  userControllers.checkUserLogin,
);

app.get('/user', validateToken, userControllers.getAllUsers);
app.get('/user/:id', validateToken, userControllers.getUserById);

// Users

app.post(
  '/categories',
  validateToken,
  validateCategory,
  categoryControllers.createCategory,
);

app.get('/categories', validateToken, categoryControllers.getAllCategories);
app.get('/categories/:id', validateToken, categoryControllers.getCategoryById);

// Categories

app.post('/post', validateToken, validatePost, blogPostControllers.createPost);
app.get('/post', validateToken, blogPostControllers.getAllPosts);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
