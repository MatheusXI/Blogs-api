const express = require('express');

const bodyParser = require('body-parser');
const userControllers = require('./controllers/userControllers');
const categoryControllers = require('./controllers/categoryControllers');

const validateUser = require('./middlewares/validateUser');
const validateCategory = require('./middlewares/validateCategory');

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

app.get('/user', userControllers.getAllUsers);
app.get('/user/:id', userControllers.getUserById);

app.post('/categories', validateCategory, categoryControllers.createCategory);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
