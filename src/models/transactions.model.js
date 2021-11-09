const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");
const Users = require("./users.model");

const Transactions = db.define(
  "transactions",
  {
    sender: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    receiver: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    type: {
      type: DataTypes.ENUM("Top Up", "Transfer"),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
Transactions.belongsTo(Users, { as: "senderUsers", foreignKey: "sender" });
Transactions.belongsTo(Users, { as: "receiverUsers", foreignKey: "receiver" });
module.exports = Transactions;
