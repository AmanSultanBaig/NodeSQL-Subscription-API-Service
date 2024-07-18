const express = require("express");
const router = express.Router();
const subscriptionController = require("../controllers/subscription.controller");
const { authenticate } = require("../middlewares/authenticate.middleware");

const subs = new subscriptionController();

router.post("/add-plan", authenticate, subs.addSubscriptionPlan);
router.get("/get-plans", authenticate, subs.getSubscriptionPlans);
router.post("/get-plan-details", authenticate, subs.getSubscriptionPlanDetails);

module.exports = router;
