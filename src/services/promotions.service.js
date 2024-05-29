import Promotion from '../models/promotions.model.js';

const PromotionService = {
    createNewPromotion: async (data) => {
        return await Promotion.add(data);
    },

    getPromotion: async (id) => {
        return await Promotion.get(id);
    },

    getAllPromotions: async () => {
        return await Promotion.getAll();
    },
}

export default PromotionService;