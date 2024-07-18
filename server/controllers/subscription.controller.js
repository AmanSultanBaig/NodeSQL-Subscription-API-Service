const subscriptionService = require("../services/subscription.service");

class SubscriptionController {
  constructor() {
    this._subscriptionService = new subscriptionService();
  }
  
  addSubscriptionPlan = async (req, res) => {
    try {
      const payload = req.body;
      const result = await this._subscriptionService.createSubscriptionPlan(payload);
      res.status(result.status).json(result.data);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  };

  getSubscriptionPlans = async (req, res) => {
    try {
      const result = await this._subscriptionService.fetchSubscriptionPlans();
      res.status(result.status).json(result.data);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  };
}

module.exports = SubscriptionController;
