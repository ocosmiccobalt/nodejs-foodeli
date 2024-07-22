db.cart.insertOne({
  items: [
    { productId: ObjectId("669aa7d2423b9d0a5dcdce07"), title: "Cupcake 3", price: 2.19, quantity: 3 },
    { productId: ObjectId("669aa7d2423b9d0a5dcdce08"), title: "Cupcake 4", price: 1.99, quantity: 1 }
  ],
  totalPrice: 8.56,
  changed: true
})

db.cart.find({ _id: ObjectId('669e5984b86aa0ae1ccdcdf6') })

db.cart.find()

/*
  [
    {
      _id: ObjectId('669e5984b86aa0ae1ccdcdf6'),
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
      ],
      totalPrice: 8.56,
      changed: true
    }
  ]
*/

db.cart.replaceOne(
  { _id: ObjectId('669e5984b86aa0ae1ccdcdf6') },
  {
    items: [
      { productId: ObjectId("669aa7d2423b9d0a5dcdce08"), title: "Cupcake 4", price: 1.99, quantity: 1 }
    ],
    totalPrice: 1.99,
    changed: true
  }
)

/*
  {
    acknowledged: true,
    insertedId: null,
    matchedCount: 1,
    modifiedCount: 1,
    upsertedCount: 0
  }
*/

db.cart.find()

/*
  [
    {
      _id: ObjectId('669e5984b86aa0ae1ccdcdf6'),
      items: [
        {
          productId: ObjectId('669aa7d2423b9d0a5dcdce08'),
          title: 'Cupcake 4',
          price: 1.99,
          quantity: 1
        }
      ],
      totalPrice: 1.99,
      changed: true
    }
  ]
*/

db.cart.deleteOne({ _id: ObjectId('669e5984b86aa0ae1ccdcdf6') })
