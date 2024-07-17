const baseHandler = require("../helpers/baseClass");
const subscriptionRepository = require("../repositories/subscription.repository");

class subscriptionService extends baseHandler {
  constructor() {
    super();
    this.subsPlanRepo = new subscriptionRepository();
  }

  async createSubscriptionPlan(payload) {
    try {
        const result = await this.subsPlanRepo.insertSubscriptionPlan(payload);
        return this.response({data: result, message: "subscription plan created successfully!"}, 200)
      } catch (error) {
        console.error('Error creating subscription plan:', error);
        throw error;
      }
  }
}

module.exports = subscriptionService;