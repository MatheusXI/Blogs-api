const express = require('express');

const bodyParser = require('body-parser');
const userControllers = require('./controllers/userControllers');
const validateUser = require('./middlewares/validateUser');

const app = express();

app.use(bodyParser.json());

app.post('/user', validateUser, userControllers.createUser);
app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
