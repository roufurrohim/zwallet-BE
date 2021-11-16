const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
} = require("../helpers/env");
const { Sequelize } = require("sequelize");

const db = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  // dialectOptions: {
  //   useUTC: true, //for reading from database
  //   dateStrings: true,
  // },
  // timezone: "+07:00",
});

db.authenticate()
  .then(() => {
    console.log("Connection Success");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = db;
