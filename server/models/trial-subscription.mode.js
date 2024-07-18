const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require('./user.model');

const subscriptionTrial = sequelize.define("subscriptionTrial", {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        }
    },
    plan_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_trial_expired: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
  },
  {
    tableName: "subscription_trial",
    timestamps: true
  }
);

module.exports = subscriptionTrial;