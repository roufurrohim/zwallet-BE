const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");

const Users = db.define(
  "users",
  {
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    pin: {
      type: DataTypes.NUMBER,
    },
    balance: {
      type: DataTypes.NUMBER,
    },
    descriptions: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Users;
