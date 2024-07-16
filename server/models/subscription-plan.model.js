const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const subscriptionPlan = sequelize.define("subscriptionPlan", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stripe_price_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trial_days: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    have_trial: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    subscription_price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "subscription_plan",
    timestamps: true
  }
);

module.exports = subscriptionPlan;