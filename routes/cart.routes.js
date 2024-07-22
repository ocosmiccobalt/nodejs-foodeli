import express from 'express';

import {
  getCart,
  addCart,
  updateCart,
  deleteCart
} from '../controllers/cart.controller.js';

const router = express.Router();

router.get('/:id', getCart);

router.post('/', addCart); // /cart/

router.put('/:id', updateCart);

router.delete('/:id', deleteCart);

export default router;
