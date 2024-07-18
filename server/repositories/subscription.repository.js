const SubscriptionPlanModel = require("../models/subscription-plan.model");
const SubscriptionDetailModel = require("../models/subscription-details.model");
const SubscriptionTrialModel = require("../models/trial-subscription.mode");

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

  async getPlanById(id) {
    try {
      const result = await SubscriptionPlanModel.findOne({ where: { id } });
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

  async findSubscriptionDetails(filters) {
    try {
      const result = await SubscriptionDetailModel.findOne({ where: filters });
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async insertSubscriptionTrial(payload) {
    try {
      const result = await SubscriptionTrialModel.create(payload);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findSubscriptionTrial(user_id) {
    try {
      const result = await SubscriptionTrialModel.findOne({where: { user_id }});
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async updateTrial(data, filters) {
    try {
      const result = await SubscriptionTrialModel.update(data, {where: { filters }});
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }


}

module.exports = subscriptionRepository;
