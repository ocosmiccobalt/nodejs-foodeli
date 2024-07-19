db.categories.insertMany([
   { name: "burger" },
   { name: "pizza" },
   { name: "cupcake" },
   { name: "ramen" },
   { name: "ice-cream" }
])

db.categories.find()

/*
  [
    { _id: ObjectId('669aa1fa423b9d0a5dcdcdf6'), name: 'burger' },
    { _id: ObjectId('669aa1fa423b9d0a5dcdcdf7'), name: 'pizza' },
    { _id: ObjectId('669aa1fa423b9d0a5dcdcdf8'), name: 'cupcake' },
    { _id: ObjectId('669aa1fa423b9d0a5dcdcdf9'), name: 'ramen' },
    { _id: ObjectId('669aa1fa423b9d0a5dcdcdfa'), name: 'ice-cream' }
  ]
*/

db.products.insertMany([
  { title: "Burger 1", price: 3.59, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdf6"), name: "burger" } },
  { title: "Burger 2", price: 4.49, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdf6"), name: "burger" } },
  { title: "Burger 3", price: 3.29, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdf6"), name: "burger" } },
  { title: "Burger 4", price: 2.99, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdf6"), name: "burger" } },
  { title: "Burger 5", price: 4.09, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdf6"), name: "burger" } },
  { title: "Pizza 1", price: 6.59, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdf7"), name: "pizza" } },
  { title: "Pizza 2", price: 7.49, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdf7"), name: "pizza" } },
  { title: "Pizza 3", price: 6.29, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdf7"), name: "pizza" } },
  { title: "Pizza 4", price: 5.99, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdf7"), name: "pizza" } },
  { title: "Pizza 5", price: 7.09, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdf7"), name: "pizza" } },
  { title: "Cupcake 1", price: 2.59, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdf8"), name: "cupcake" } },
  { title: "Cupcake 2", price: 4.09, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdf8"), name: "cupcake" } },
  { title: "Cupcake 3", price: 2.19, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdf8"), name: "cupcake" } },
  { title: "Cupcake 4", price: 1.99, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdf8"), name: "cupcake" } },
  { title: "Cupcake 5", price: 2.39, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdf8"), name: "cupcake" } },
  { title: "Ramen 1", price: 3.29, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdf9"), name: "ramen" } },
  { title: "Ramen 2", price: 4.09, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdf9"), name: "ramen" } },
  { title: "Ramen 3", price: 3.09, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdf9"), name: "ramen" } },
  { title: "Ramen 4", price: 2.79, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdf9"), name: "ramen" } },
  { title: "Ramen 5", price: 3.59, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdf9"), name: "ramen" } },
  { title: "Ice Cream 1", price: 4.09, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdfa"), name: "ice-cream" } },
  { title: "Ice Cream 2", price: 2.59, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdfa"), name: "ice-cream" } },
  { title: "Ice Cream 3", price: 2.49, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdfa"), name: "ice-cream" } },
  { title: "Ice Cream 4", price: 2.29, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdfa"), name: "ice-cream" } },
  { title: "Ice Cream 5", price: 1.99, category: { categoryId: ObjectId("669aa1fa423b9d0a5dcdcdfa"), name: "ice-cream" } }
])

db.products.find()

/*
  [
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdcdfb'),
      title: 'Burger 1',
      price: 3.59,
      category: {
        categoryId: ObjectId('669aa1fa423b9d0a5dcdcdf6'),
        name: 'burger'
      }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdcdfc'),
      title: 'Burger 2',
      price: 4.49,
      category: {
        categoryId: ObjectId('669aa1fa423b9d0a5dcdcdf6'),
        name: 'burger'
      }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdcdfd'),
      title: 'Burger 3',
      price: 3.29,
      category: {
        categoryId: ObjectId('669aa1fa423b9d0a5dcdcdf6'),
        name: 'burger'
      }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdcdfe'),
      title: 'Burger 4',
      price: 2.99,
      category: {
        categoryId: ObjectId('669aa1fa423b9d0a5dcdcdf6'),
        name: 'burger'
      }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdcdff'),
      title: 'Burger 5',
      price: 4.09,
      category: {
        categoryId: ObjectId('669aa1fa423b9d0a5dcdcdf6'),
        name: 'burger'
      }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdce00'),
      title: 'Pizza 1',
      price: 6.59,
      category: { categoryId: ObjectId('669aa1fa423b9d0a5dcdcdf7'), name: 'pizza' }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdce01'),
      title: 'Pizza 2',
      price: 7.49,
      category: { categoryId: ObjectId('669aa1fa423b9d0a5dcdcdf7'), name: 'pizza' }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdce02'),
      title: 'Pizza 3',
      price: 6.29,
      category: { categoryId: ObjectId('669aa1fa423b9d0a5dcdcdf7'), name: 'pizza' }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdce03'),
      title: 'Pizza 4',
      price: 5.99,
      category: { categoryId: ObjectId('669aa1fa423b9d0a5dcdcdf7'), name: 'pizza' }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdce04'),
      title: 'Pizza 5',
      price: 7.09,
      category: { categoryId: ObjectId('669aa1fa423b9d0a5dcdcdf7'), name: 'pizza' }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdce05'),
      title: 'Cupcake 1',
      price: 2.59,
      category: {
        categoryId: ObjectId('669aa1fa423b9d0a5dcdcdf8'),
        name: 'cupcake'
      }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdce06'),
      title: 'Cupcake 2',
      price: 4.09,
      category: {
        categoryId: ObjectId('669aa1fa423b9d0a5dcdcdf8'),
        name: 'cupcake'
      }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdce07'),
      title: 'Cupcake 3',
      price: 2.19,
      category: {
        categoryId: ObjectId('669aa1fa423b9d0a5dcdcdf8'),
        name: 'cupcake'
      }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdce08'),
      title: 'Cupcake 4',
      price: 1.99,
      category: {
        categoryId: ObjectId('669aa1fa423b9d0a5dcdcdf8'),
        name: 'cupcake'
      }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdce09'),
      title: 'Cupcake 5',
      price: 2.39,
      category: {
        categoryId: ObjectId('669aa1fa423b9d0a5dcdcdf8'),
        name: 'cupcake'
      }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdce0a'),
      title: 'Ramen 1',
      price: 3.29,
      category: { categoryId: ObjectId('669aa1fa423b9d0a5dcdcdf9'), name: 'ramen' }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdce0b'),
      title: 'Ramen 2',
      price: 4.09,
      category: { categoryId: ObjectId('669aa1fa423b9d0a5dcdcdf9'), name: 'ramen' }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdce0c'),
      title: 'Ramen 3',
      price: 3.09,
      category: { categoryId: ObjectId('669aa1fa423b9d0a5dcdcdf9'), name: 'ramen' }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdce0d'),
      title: 'Ramen 4',
      price: 2.79,
      category: { categoryId: ObjectId('669aa1fa423b9d0a5dcdcdf9'), name: 'ramen' }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdce0e'),
      title: 'Ramen 5',
      price: 3.59,
      category: { categoryId: ObjectId('669aa1fa423b9d0a5dcdcdf9'), name: 'ramen' }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdce0f'),
      title: 'Ice Cream 1',
      price: 4.09,
      category: {
        categoryId: ObjectId('669aa1fa423b9d0a5dcdcdfa'),
        name: 'ice-cream'
      }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdce10'),
      title: 'Ice Cream 2',
      price: 2.59,
      category: {
        categoryId: ObjectId('669aa1fa423b9d0a5dcdcdfa'),
        name: 'ice-cream'
      }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdce11'),
      title: 'Ice Cream 3',
      price: 2.49,
      category: {
        categoryId: ObjectId('669aa1fa423b9d0a5dcdcdfa'),
        name: 'ice-cream'
      }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdce12'),
      title: 'Ice Cream 4',
      price: 2.29,
      category: {
        categoryId: ObjectId('669aa1fa423b9d0a5dcdcdfa'),
        name: 'ice-cream'
      }
    },
    {
      _id: ObjectId('669aa7d2423b9d0a5dcdce13'),
      title: 'Ice Cream 5',
      price: 1.99,
      category: {
        categoryId: ObjectId('669aa1fa423b9d0a5dcdcdfa'),
        name: 'ice-cream'
      }
    }
  ]
*/
