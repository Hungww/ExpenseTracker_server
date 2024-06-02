
import FeedbackService from '../services/feedback.service.js';

async function createFeedback(req, res) {
    try {
        const data = req.body;
        const feedback = await FeedbackService.createNewFeedback(data);
        res.status(200).send(feedback);
    } catch (error) {
        res.status(500).send(error);
    }
}

export { createFeedback };