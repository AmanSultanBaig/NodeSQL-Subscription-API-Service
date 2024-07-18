const SubscriptionPlanModel = require("../models/subscription-plan.model");

class subscriptionRepository {
  
  async insertSubscriptionPlan(payload) {
    try {
      const result = await SubscriptionPlanModel.create(payload);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findSubscriptionPlans() {
    try {
      const result = await SubscriptionPlanModel.findAll();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
}

module.exports = subscriptionRepository;