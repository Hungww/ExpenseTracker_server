import Subscription from '../models/subscription.model.js';

const subscriptionService = {
    createNewSubscription: async (data) => {
        return await Subscription.add(data);
    },

    getSubscription: async (id) => {
        return await Subscription.get(id);
    },

    getAllSubscriptions: async () => {
        return await Subscription.getAll();
    },
}

export default subscriptionService;