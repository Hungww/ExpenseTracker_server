import Feedback from '../models/feedback.model.js';

const FeedbackService = {
    createNewFeedback: async (data) => {
        return await Feedback.add(data);
    },

    getFeedback: async (id) => {
        return await Feedback.get(id);
    },

    getAllFeedbacks: async () => {
        return await Feedback.getAll();
    },
}

export default FeedbackService;