import React from 'react';
import Pizza from '../pizza.component';

export default {
  title: 'Pizza',
  component: Pizza,
  decorators: [storyFn => <ul>{storyFn()}</ul>]
};

export const Original = () => (
  <Pizza
    pizza={pizza}
    ingredients={ingredients}
  />
);

const pizza = {
  "id": 1,
  "name": "Ariva",
  "size": {
    "small": {
      "price": "8.90",
      "name": "Small",
      "diameter": "25",
      "weight": "440"
    },
    "medium": {
      "price": "14.90",
      "name": "Medium",
      "diameter": "30",
      "weight": "630"
    },
    "big": {
      "price": "19.90",
      "name": "Big",
      "diameter": "35",
      "weight": "950"
    }
  },
  "dough": {
    "type1": "Traditional",
    "type2": "Thin"
  },
  "extra": [7, 3, 13],
  "type": [4],
  "image": "images/image-1.jpg",
  "ingredients": [
    {
      "id": 23,
      "removable": true
    },
    {
      "id": 10,
      "removable": true
    },
    {
      "id": 5,
      "removable": true
    },
    {
      "id": 12,
      "removable": true
    },
    {
      "id": 17,
      "removable": true
    },
    {
      "id": 3,
      "removable": true
    },
    {
      "id": 28,
      "removable": false
    },
    {
      "id": 14,
      "removable": false
    }
  ]
}

const ingredients = [
  {
    "id": 1,
    "name": "garlic",
    "image": "",
    "price": ""
  },
  {
    "id": 2,
    "name": "pepperoni",
    "image": "",
    "price": ""
  },
  {
    "id": 3,
    "name": "mozzarella",
    "image": "/pizza-app/images/extra-3.png",
    "price": "2.40"
  },
  {
    "id": 4,
    "name": "tomato sauce",
    "image": "",
    "price": ""
  },
  {
    "id": 5,
    "name": "tomatoes",
    "image": "",
    "price": ""
  },
  {
    "id": 6,
    "name": "ham",
    "image": "/pizza-app/images/extra-6.png",
    "price": "2.40"
  },
  {
    "id": 7,
    "name": "portobello mushrooms",
    "image": "/pizza-app/images/extra-7.png",
    "price": "1.80"
  },
  {
    "id": 8,
    "name": "creamy sauce",
    "image": "",
    "price": ""
  },
  {
    "id": 9,
    "name": "pineapples",
    "image": "",
    "price": ""
  },
  {
    "id": 10,
    "name": "chicken",
    "image": "/pizza-app/images/extra-10.png",
    "price": "2.40"
  },
  {
    "id": 11,
    "name": "sweet and sour sauce",
    "image": "",
    "price": ""
  },
  {
    "id": 12,
    "name": "sweet pepper",
    "image": "/pizza-app/images/extra-12.png",
    "price": "1.80"
  },
  {
    "id": 13,
    "name": "jalapeno pepper",
    "image": "/pizza-app/images/extra-13.png",
    "price": "1.80"
  },
  {
    "id": 14,
    "name": "sauce burger",
    "image": "",
    "price": ""
  },
  {
    "id": 15,
    "name": "bolognes sauce",
    "image": "",
    "price": ""
  },
  {
    "id": 16,
    "name": "dill pickles",
    "image": "/pizza-app/images/extra-16.png",
    "price": "1.80"
  },
  {
    "id": 17,
    "name": "red onion",
    "image": "",
    "price": ""
  },
  {
    "id": 18,
    "name": "bacon",
    "image": "/pizza-app/images/extra-18.png",
    "price": "2.80"
  },
  {
    "id": 19,
    "name": "spicy pepperoni",
    "image": "",
    "price": ""
  },
  {
    "id": 20,
    "name": "sesame",
    "image": "",
    "price": ""
  },
  {
    "id": 21,
    "name": "shrimps",
    "image": "",
    "price": ""
  },
  {
    "id": 22,
    "name": "blue cheese",
    "image": "/pizza-app/images/extra-22.png",
    "price": "2.40"
  },
  {
    "id": 23,
    "name": "spicy chorizo",
    "image": "/pizza-app/images/extra-23.png",
    "price": "2.40"
  },
  {
    "id": 24,
    "name": "ground beef",
    "image": "",
    "price": ""
  },
  {
    "id": 25,
    "name": "cheddar and parmesan cheeses",
    "image": "/pizza-app/images/extra-25.png",
    "price": "2.40"
  },
  {
    "id": 26,
    "name": "black olives",
    "image": "",
    "price": ""
  },
  {
    "id": 27,
    "name": "barbecue sauce",
    "image": "",
    "price": ""
  },
  {
    "id": 28,
    "name": "ranch sauce",
    "image": "",
    "price": ""
  },
  {
    "id": 29,
    "name": "italian seasoning",
    "image": "",
    "price": ""
  },
  {
    "id": 30,
    "name": "salsa sauce",
    "image": "",
    "price": ""
  },
  {
    "id": 31,
    "name": "feta cheese",
    "image": "/pizza-app/images/extra-31.png",
    "price": "2.40"
  },
  {
    "id": 32,
    "name": "chipotle sauce",
    "image": "",
    "price": ""
  },
  {
    "id": 33,
    "name": "cheese sauce",
    "image": "",
    "price": ""
  }
]