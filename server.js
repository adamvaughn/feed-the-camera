const express = require('express');
const sequelize = require('./config/connection');
//const exphbs = require('express-handlebars');
const session = require('express-session');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'thisismysecret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// replaced the code below with code above (referencing 13.1.6)

//app.listen(PORT, () => {
  //console.log(`API server now on port ${PORT}!`);
//});