import { ObjectId } from 'mongodb';

import getDb from '../data/database.js';

class Order {
  constructor({
    id,
    totalPrice,
    customerName,
    email,
    street,
    postalCode,
    city,
    items
  }) {
    this.id = id;
    this.totalPrice = totalPrice;
    this.customerName = customerName;
    this.email = email;
    this.street = street;
    this.postalCode = postalCode;
    this.city = city;
    this.items = items;
  }

  async save() {
    const items = this.items.map((item) => ({
      productId: new ObjectId(item.id),
      title: item.title,
      price: item.price,
      quantity: item.quantity
    }));

    return await getDb()
      .collection('orders')
      .insertOne({
        totalPrice: this.totalPrice,
        customerName: this.customerName,
        email: this.email,
        street: this.street,
        postalCode: this.postalCode,
        city: this.city,
        items: items
      });
  }
}

export default Order;
