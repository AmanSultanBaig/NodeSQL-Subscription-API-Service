const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user.model');

const subscriptionDetails = sequelize.define('subscriptionDetails', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        }
    },
    stripe_subscription_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    subscription_schedule_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    stripe_customer_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    subscription_plan_price_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    plan_amount: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    currency: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    plan_interval: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    plan_interval_count: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    plan_period_start: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    plan_period_end: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    trial_end: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: null,
    },
    is_cancel: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    subscription_canceled_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'subscription_details',
    timestamps: true,
});

User.hasMany(subscriptionDetails, { foreignKey: 'user_id' });
subscriptionDetails.belongsTo(User, { foreignKey: 'user_id' });

module.exports = subscriptionDetails;