const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require('./user.model');

const pendingFees = sequelize.define("pendingFees", {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      }
    },
    customer_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      }
    },
    charge_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "pending_fees",
    timestamps: true
  }
);

User.hasMany(pendingFees, { foreignKey: 'user_id' });
pendingFees.belongsTo(User, { foreignKey: 'user_id'});

module.exports = pendingFees;