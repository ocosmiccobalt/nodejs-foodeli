import Cart from '../models/cart.model.js';

export async function getCart(req, res, next) {
  let cart;

  try {
    cart = await Cart.findById(req.params.id);
  } catch (error) {
    return next(error);
  }

  res.json(cart);
}

export async function addCart(req, res, next) {
  const cartData = req.body;

  const cart = new Cart({
    items: cartData.items,
    totalPrice: cartData.totalPrice,
    changed: cartData.changed
  });

  let insertedId;

  try {
    const result = await cart.save();
    insertedId = result.insertedId;
  } catch (error) {
    return next(error);
  }

  cart.id = insertedId.toString();

  res
    .status(201)
    .json({
      message: 'Added cart successfully!',
      cartId: cart.id
    });
}

export async function updateCart(req, res, next) {
  const cartId = req.params.id;
  const cartData = req.body;

  const cart = new Cart({
    id: cartId,
    items: cartData.items,
    totalPrice: cartData.totalPrice,
    changed: cartData.changed
  });

  try {
    await cart.save();
  } catch (error) {
    return next(error);
  }

  res
    .status(201)
    .json({ message: 'Cart updated!' });
}

export async function deleteCart(req, res, next) {
  const cart = new Cart({ id: req.params.id });

  try {
    await cart.delete();
  } catch (error) {
    return next(error);
  }

  res
    .status(201)
    .json({ message: 'Cart deleted!' });
}
