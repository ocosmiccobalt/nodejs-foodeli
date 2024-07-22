import Order from '../models/order.model.js';

export async function addOrder(req, res, next) {
  const orderData = req.body.order;

  if (orderData === null || orderData.items === null || orderData.items.length === 0) {
    return res
      .status(400)
      .json({ message: 'Missing data.' });
  }

  if (
    orderData.customer.email === null ||
    !orderData.customer.email.includes('@') ||
    orderData.customer.name === null ||
    orderData.customer.name.trim() === '' ||
    orderData.customer.street === null ||
    orderData.customer.street.trim() === '' ||
    orderData.customer['postal-code'] === null ||
    orderData.customer['postal-code'].trim() === '' ||
    orderData.customer.city === null ||
    orderData.customer.city.trim() === ''
  ) {
    return res
      .status(400)
      .json({
        message:
          'Missing data: Email, name, street, postal code or city is missing.'
      });
  }

  const order = new Order({
    totalPrice: orderData.totalPrice,
    customerName: orderData.customer.name,
    email: orderData.customer.email,
    street: orderData.customer.street,
    postalCode: orderData.customer['postal-code'],
    city: orderData.customer.city,
    items: orderData.items
  });

  let insertedId;

  try {
    const result = await order.save();
    insertedId = result.insertedId;
  } catch (error) {
    return next(error);
  }

  order.id = insertedId.toString();

  res
    .status(201)
    .json({
      message: 'Order ' + order.id + ' created!',
      createdOrder: order
    });
}
