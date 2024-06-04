import SubscriptionService from '../services/subscription.service.js';

async function createSubscription(req, res) {
    try {
        const data = req.body;
        const subscription = await SubscriptionService.createNewSubscription(data);
        res.status(200).send(subscription);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getSubscription(req, res) {
    try {
        const id = req.params.id;
        const subscription = await SubscriptionService.getSubscription(id);
        if (subscription) {
            res.status(200).send(subscription);
        } else {
            res.status(404).send({ message: 'Subscription not found' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getAllSubscriptions(req, res) {
    try {
        const subscriptions = await SubscriptionService.getAllSubscriptions();
        res.status(200).send(subscriptions);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getSubscriptionRef(req, res) {
    try {
        const id = req.params.id;
        const subscriptionRef = await SubscriptionService.getSubscriptionRef(id);
        if (subscriptionRef) {
            res.status(200).send(subscriptionRef);
        } else {
            res.status(404).send({ message: 'Subscription not found' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

export { createSubscription, getSubscription, getAllSubscriptions, getSubscriptionRef };