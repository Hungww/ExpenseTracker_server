import PromotionService from '../services/promotions.service.js';

async function createPromotion(req, res) {
  try {
    const data = req.body;
    const promotion = await PromotionService.createNewPromotion(data);
    res.status(200).send(promotion);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getPromotion(req, res) {
  try {
    const id = req.params.id;
    const promotion = await PromotionService.getPromotion(id);
    if (promotion) {
      res.status(200).send(promotion);
    } else {
      res.status(404).send({ message: 'Promotion not found' });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getAllPromotions(req, res) {
  try {
    console.log('Getting all promotions');
    const promotions = await PromotionService.getAllPromotions();
    res.status(200).send(promotions);
  } catch (error) {
    res.status(500).send(error);
  }
}

export { createPromotion, getPromotion, getAllPromotions };