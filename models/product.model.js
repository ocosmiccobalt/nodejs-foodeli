import getDb from '../data/database.js';

class Product {
  constructor({
    id,
    title,
    price,
    category
  }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.category = category;
  }

  static async getAllProducts() {
    const productDocuments = await getDb()
      .collection('products')
      .find()
      .toArray();

    return productDocuments.map((doc) => new Product(
      {
        title: doc.title,
        price: doc.price,
        category: doc.category.name,
        id: doc._id
      }
    ));
  }
}

export default Product;
