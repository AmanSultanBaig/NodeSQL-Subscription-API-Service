const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require('./user.model');

const cardDetails = sequelize.define("cardDetails", {
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
    card_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    card_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    card_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    card_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    month: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    year: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "card_details",
    timestamps: true
  }
);

User.hasMany(cardDetails, { foreignKey: 'user_id' });
pendingFees.belongsTo(User, { foreignKey: 'user_id'});

module.exports = cardDetails;