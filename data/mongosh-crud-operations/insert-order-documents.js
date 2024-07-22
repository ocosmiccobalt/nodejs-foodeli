db.orders.insertOne({
  totalPrice: 8.56,
  customerName: "Test Name",
  email: "test@test.com",
  street: "Teststreet, 5",
  postalCode: 123456,
  city: "Testcity",
  items: [
    { productId: ObjectId("669aa7d2423b9d0a5dcdce07"), title: "Cupcake 3", price: 2.19, quantity: 3 },
    { productId: ObjectId("669aa7d2423b9d0a5dcdce08"), title: "Cupcake 4", price: 1.99, quantity: 1 }
  ]
})

db.orders.find()

/*
  [
    {
      _id: ObjectId('669af20ac39a3fcd9ecdcdf6'),
      totalPrice: 8.56,
      customerName: 'Test Name',
      email: 'test@test.com',
      street: 'Teststreet, 5',
      postalCode: 123456,
      city: 'Testcity',
      items: [
        {
          productId: ObjectId('669aa7d2423b9d0a5dcdce07'),
          title: 'Cupcake 3',
          price: 2.19,
          quantity: 3
        },
        {
          productId: ObjectId('669aa7d2423b9d0a5dcdce08'),
          title: 'Cupcake 4',
          price: 1.99,
          quantity: 1
        }
      ]
    }
  ]
*/
