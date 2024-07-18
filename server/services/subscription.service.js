const baseHandler = require("../helpers/baseClass");
const { checkTrial } = require("../helpers/checkTrialPeriod");
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

  async getPlanDetails(filters) {
    try {
        let msg = '';
        const {subscription_plan_id, user_id} = filters;
        const foundPlan = await this.subsPlanRepo.getPlanById(subscription_plan_id);
        if(!foundPlan) {
            return this.response({data: null, message: "detail not found"}, 404)
        }

        const { trial_days, subscription_price, name } = foundPlan;

        const isPlanSubscriped = await this.subsPlanRepo.findSubscriptionDetails({ user_id });
        let remainingTrial = trial_days;
        if(!isPlanSubscriped && foundPlan?.have_trial) {
          
          const planTrialIsExists = await this.subsPlanRepo.findSubscriptionTrial(user_id);
          if(!planTrialIsExists) {
            await this.subsPlanRepo.insertSubscriptionTrial({plan_id: subscription_plan_id, user_id})
          } else {
            remainingTrial = checkTrial(remainingTrial, planTrialIsExists.createdAt)
          }

          msg = `Congratulation! you have ${trial_days} days trial and only ${remainingTrial} days of trial left, once trial is completed you subscription charges will start which is $${subscription_price} of ${name}`
          if(remainingTrial > trial_days) {
            await this.subsPlanRepo.updateTrial({is_trial_expired: true}, { user_id })
            msg = `Your ${trial_days} days period is expired now, We will charge $${subscription_price} for ${name}`
          }
        }

        return this.response({data: foundPlan, message: msg}, 200)
      } catch (error) {
        console.error('Error subscription plan details:', error);
        throw error;
      }
  }

  async fetchSubscriptionPlans() {
    try {
        const result = await this.subsPlanRepo.findSubscriptionPlans();
        return this.response({data: result, message: "subscription plan fetched successfully!"}, 200)
      } catch (error) {
        console.error('Error fetching subscription plan:', error);
        throw error;
      }
  }
}

module.exports = subscriptionService;