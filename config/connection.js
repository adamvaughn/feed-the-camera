const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}

module.exports = sequelize;

// module connection below for reference
// import the Sequelize constructor from the library
// const Sequelize = require('sequelize');

// create connection to our database, pass in your MySQL information for username and password
//const sequelize = new Sequelize('feed_the_camera_data', 'username', 'password', {
//  host: 'localhost',
//  dialect: 'mysql',
//  port: 3306
//});

//module.exports = sequelize;