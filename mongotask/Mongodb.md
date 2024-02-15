switched to db Task

1.Find all the information about each products.

Task> db.Task.find()
[
  {
    _id: ObjectId('65ca5783b574b3b529a74771'),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74772'),
    id: '2',
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_material: 'Cotton',
    product_color: 'indigo'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74773'),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74774'),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74775'),
    id: '5',
    product_name: 'Sleek Cotton Chair',
    product_price: 33,
    product_material: 'Fresh',
    product_color: 'black'
  },
  {

    _id: ObjectId('65ca5783b574b3b529a74776'),
    id: '6',
    product_name: 'Awesome Wooden Towels',
    product_price: 474,
    product_material: 'Plastic',
    product_color: 'orange'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74777'),
    id: '7',
    product_name: 'Practical Soft Shoes',
    product_price: 500,
    product_material: 'Rubber',
    product_color: 'pink'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74778'),
    id: '8',
    product_name: 'Incredible Steel Hat',
    product_price: 78,
    product_material: 'Rubber',
    product_color: 'violet'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74779'),
    id: '9',
    product_name: 'Awesome Wooden Ball',
    product_price: 28,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a7477a'),
    id: '10',
    product_name: 'Generic Wooden Pizza',
    product_price: 84,
    product_material: 'Frozen',
    product_color: 'indigo'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a7477b'),
    id: '11',
    product_name: 'Unbranded Wooden Cheese',
    product_price: 26,
    product_material: 'Soft',
    product_color: 'black'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a7477c'),
    id: '12',
    product_name: 'Unbranded Plastic Salad',
    product_price: 89,
    product_material: 'Wooden',
    product_color: 'pink'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a7477d'),
    id: '13',
    product_name: 'Gorgeous Cotton Keyboard',
    product_price: 37,
    product_material: 'Concrete',
    product_color: 'sky blue'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a7477e'),
    id: '14',
    product_name: 'Incredible Steel Shirt',
    product_price: 54,
    product_material: 'Metal',
    product_color: 'white'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a7477f'),
    id: '15',
    product_name: 'Ergonomic Cotton Hat',
    product_price: 43,
    product_material: 'Rubber',
    product_color: 'mint green'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74780'),
    id: '16',
    product_name: 'Small Soft Chair',
    product_price: 47,
    product_material: 'Cotton',
    product_color: 'teal'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74781'),
    id: '17',
    product_name: 'Incredible Metal Car',
    product_price: 36,
    product_material: 'Fresh',
    product_color: 'indigo'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74782'),
    id: '18',
    product_name: 'Licensed Plastic Bacon',
    product_price: 88,
    product_material: 'Steel',
    product_color: 'yellow'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74783'),
    id: '19',
    product_name: 'Intelligent Cotton Chips',
    product_price: 46,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74784'),
    id: '20',
    product_name: 'Handcrafted Wooden Bacon',
    product_price: 36,
    product_material: 'Concrete',
    product_color: 'lime'
  }
]

2.Find the product price which are between 400 to 800.

[{
  "product_price": 655
},
{
  "product_price": 690
},
{
  "product_price": 492
},
{
  "product_price": 474
},
{
  "product_price": 500
}]

3.Find the product price which are not between 400 to 600

Filter: {"product_price": {"$lte":400}}
Query : {"_id":0, "id":0, product_name: 0, product_material:0, product_color:0}

[{
  "product_price": 33
},
{
  "product_price": 78
},
{
  "product_price": 28
},
{
  "product_price": 84
},
{
  "product_price": 26
},
{
  "product_price": 89
},
{
  "product_price": 37
},
{
  "product_price": 54
},
{
  "product_price": 43
},
{
  "product_price": 47
},
{
  "product_price": 36
},
{
  "product_price": 88
},
{
  "product_price": 46
},
{
  "product_price": 36
},
{
  "product_price": 90
},
{
  "product_price": 99
},
{
  "product_price": 95
},
{
  "product_price": 47
},
{
  "product_price": 20
}]

4. List the four product which are greater than 500 in  price.

Filter : {"product_price": {"$gte":500}}
Query    {"_id":0, "id":0, product_name: 0, product_material:0, product_color:0}

[{
  "product_price": 655
},
{
  "product_price": 911
},
{
  "product_price": 690
},
{
  "product_price": 500
}]


5. Find the product name and product material of each products

Task> db.Task.find({}, {"product_name": 1, "product_material": 1})
[
  {
    _id: ObjectId('65ca5783b574b3b529a74771'),
    product_name: 'Intelligent Fresh Chips',
    product_material: 'Concrete'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74772'),
    product_name: 'Practical Fresh Sausages',
    product_material: 'Cotton'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74773'),
    product_name: 'Refined Steel Car',
    product_material: 'Rubber'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74774'),
    product_name: 'Gorgeous Plastic Pants',
    product_material: 'Soft'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74775'),
    product_name: 'Sleek Cotton Chair',
    product_material: 'Fresh'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74776'),
    product_name: 'Awesome Wooden Towels',
    product_material: 'Plastic'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74777'),
    product_name: 'Practical Soft Shoes',
    product_material: 'Rubber'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74778'),
    product_name: 'Incredible Steel Hat',
    product_material: 'Rubber'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74779'),
    product_name: 'Awesome Wooden Ball',
    product_material: 'Soft'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a7477a'),
    product_name: 'Generic Wooden Pizza',
    product_material: 'Frozen'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a7477b'),
    product_name: 'Unbranded Wooden Cheese',
    product_material: 'Soft'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a7477c'),
    product_name: 'Unbranded Plastic Salad',
    product_material: 'Wooden'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a7477d'),
    product_name: 'Gorgeous Cotton Keyboard',
    product_material: 'Concrete'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a7477e'),
    product_name: 'Incredible Steel Shirt',
    product_material: 'Metal'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a7477f'),
    product_name: 'Ergonomic Cotton Hat',
    product_material: 'Rubber'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74780'),
    product_name: 'Small Soft Chair',
    product_material: 'Cotton'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74781'),
    product_name: 'Incredible Metal Car',
    product_material: 'Fresh'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74782'),
    product_name: 'Licensed Plastic Bacon',
    product_material: 'Steel'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74783'),
    product_name: 'Intelligent Cotton Chips',
    product_material: 'Soft'
  },
  {
    _id: ObjectId('65ca5783b574b3b529a74784'),
    product_name: 'Handcrafted Wooden Bacon',
    product_material: 'Concrete'
  }
]

6. Find the product with a row id 10

{
  "_id": {
    "$oid": "65ca34d8b574b3b529a7475d"
  },
  "id": "10",
  "product_name": "Generic Wooden Pizza",
  "product_price": 84,
  "product_material": "Frozen",
  "product_color": "indigo"
}

7.Find only the product name and product material

Task> db.Task.find({}, { product_name: 1, product_material: 1, _id: 0  })
[
  {
    product_name: 'Intelligent Fresh Chips',
    product_material: 'Concrete'
  },
  {
    product_name: 'Practical Fresh Sausages',
    product_material: 'Cotton'
  },
  { product_name: 'Refined Steel Car', product_material: 'Rubber' },
  { product_name: 'Gorgeous Plastic Pants', product_material: 'Soft' },
  { product_name: 'Sleek Cotton Chair', product_material: 'Fresh' },
  {
    product_name: 'Awesome Wooden Towels',
    product_material: 'Plastic'
  },
  { product_name: 'Practical Soft Shoes', product_material: 'Rubber' },
  { product_name: 'Incredible Steel Hat', product_material: 'Rubber' },
  { product_name: 'Awesome Wooden Ball', product_material: 'Soft' },
  { product_name: 'Generic Wooden Pizza', product_material: 'Frozen' },
  { product_name: 'Unbranded Wooden Cheese', product_material: 'Soft' },
  {
    product_name: 'Unbranded Plastic Salad',
    product_material: 'Wooden'
  },
  {
    product_name: 'Gorgeous Cotton Keyboard',
    product_material: 'Concrete'
  },
  { product_name: 'Incredible Steel Shirt', product_material: 'Metal' },
  { product_name: 'Ergonomic Cotton Hat', product_material: 'Rubber' },
  { product_name: 'Small Soft Chair', product_material: 'Cotton' },
  { product_name: 'Incredible Metal Car', product_material: 'Fresh' },
  { product_name: 'Licensed Plastic Bacon', product_material: 'Steel' },
  {
    product_name: 'Intelligent Cotton Chips',
    product_material: 'Soft'
  },
  {
    product_name: 'Handcrafted Wooden Bacon',
    product_material: 'Concrete'
  }
]

8.Find all products which contain the value of soft in product material

Task> db.Task.find({}, {product_material:1, _id:0 })
[
  { product_material: 'Concrete' },
  { product_material: 'Cotton' },
  { product_material: 'Rubber' },
  { product_material: 'Soft' },
  { product_material: 'Fresh' },
  { product_material: 'Plastic' },
  { product_material: 'Rubber' },
  { product_material: 'Rubber' },
  { product_material: 'Soft' },
  { product_material: 'Frozen' },
  { product_material: 'Soft' },
  { product_material: 'Wooden' },
  { product_material: 'Concrete' },
  { product_material: 'Metal' },
  { product_material: 'Rubber' },
  { product_material: 'Cotton' },
  { product_material: 'Fresh' },
  { product_material: 'Steel' },
  { product_material: 'Soft' },
  { product_material: 'Concrete' }
]

9.Find all products which contain product color indigo and product price 492.00

Task> db.Task.find({}, {product_color: 'indigo', product_price:492, _id:0 })
[
  { product_price: 655, product_color: 'indigo' },
  { product_price: 911, product_color: 'indigo' },
  { product_price: 690, product_color: 'indigo' },
  { product_price: 492, product_color: 'indigo' },
  { product_price: 33, product_color: 'indigo' },
  { product_price: 474, product_color: 'indigo' },
  { product_price: 500, product_color: 'indigo' },
  { product_price: 78, product_color: 'indigo' },
  { product_price: 28, product_color: 'indigo' },
  { product_price: 84, product_color: 'indigo' },
  { product_price: 26, product_color: 'indigo' },
  { product_price: 89, product_color: 'indigo' },
  { product_price: 37, product_color: 'indigo' },
  { product_price: 54, product_color: 'indigo' },
  { product_price: 43, product_color: 'indigo' },
  { product_price: 47, product_color: 'indigo' },
  { product_price: 36, product_color: 'indigo' },
  { product_price: 88, product_color: 'indigo' },
  { product_price: 46, product_color: 'indigo' },
  { product_price: 36, product_color: 'indigo' }
]

10.Delete the products which product price value are same.


Task> db.Task.deleteMany({ product_price:36})
{ acknowledged: true, deletedCount: 2 }