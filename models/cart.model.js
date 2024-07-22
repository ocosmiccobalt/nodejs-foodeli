import { ObjectId } from 'mongodb';

import getDb from '../data/database.js';

class Cart {
  constructor({
    id,
    items,
    totalPrice,
    changed
  }) {
    this.id = id;
    this.items = items;
    this.totalPrice = totalPrice;
    this.changed = changed;
  }

  static async findById(id) {
    let cartId;

    try {
      cartId = new ObjectId(id);
    } catch (error) {
      error.code = 404;
      throw error;
    }

    const foundCart = await getDb()
      .collection('cart')
      .findOne({ _id: cartId });

    if (!foundCart) {
      const error = new Error('Could not find cart with provided id.');
      error.code = 404;
      throw error;
    }

    return new Cart({
      items: foundCart.items,
      totalPrice: foundCart.totalPrice,
      changed: foundCart.changed
    });
  }

  async save() {
    if (this.id) {
      const cartId = new ObjectId(this.id);

      return await getDb()
        .collection('cart')
        .replaceOne(
          { _id: cartId },
          {
            items: this.items,
            totalPrice: this.totalPrice,
            changed: this.changed
          }
        );
    } else {
      return await getDb()
        .collection('cart')
        .insertOne({
          items: this.items,
          totalPrice: this.totalPrice,
          changed: this.changed
        });
    }
  }

  async delete() {
    if (!this.id) {
      throw new Error('Trying to delete cart without id!');
    }

    const cartId = new ObjectId(this.id);

    return await getDb()
      .collection('cart')
      .deleteOne({ _id: cartId });
  }
}

export default Cart;
