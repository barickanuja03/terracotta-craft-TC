import React from 'react'

const Claycombo = () => {
   const claycombo = [
        {
          "unique_id": "CLAYK001",
          "name": "Clay Mixing Bowl",
          "image": "https://picsum.photos/200/300?random=1",
          "price": 18.99,
          "rating": 4.6,
          "description": "Sturdy clay mixing bowl for dough or salads, 1.5-liter capacity."
        },
        {
          "unique_id": "CLAYK002",
          "name": "Clay Casserole Dish",
          "image": "https://picsum.photos/200/300?random=2",
          "price": 34.50,
          "rating": 4.8,
          "description": "Oven-safe clay casserole dish with lid, holds 2 liters."
        },
        {
          "unique_id": "CLAYK003",
          "name": "Clay Spice Mortar",
          "image": "https://picsum.photos/200/300?random=3",
          "price": 15.75,
          "rating": 4.7,
          "description": "Clay mortar and pestle for grinding spices, 200ml capacity."
        },
        {
          "unique_id": "CLAYK004",
          "name": "Clay Water Pitcher",
          "image": "https://picsum.photos/200/300?random=4",
          "price": 22.00,
          "rating": 4.5,
          "description": "Clay pitcher with glaze, keeps water cool, 1.2-liter capacity."
        },
        {
          "unique_id": "CLAYK005",
          "name": "Clay Serving Platter",
          "image": "https://picsum.photos/200/300?random=5",
          "price": 27.99,
          "rating": 4.9,
          "description": "Large clay platter for mains or appetizers, 12-inch diameter."
        },
        {
          "unique_id": "CLAYK006",
          "name": "Clay Soup Bowl",
          "image": "https://picsum.photos/200/300?random=6",
          "price": 12.50,
          "rating": 4.4,
          "description": "Deep clay soup bowl, perfect for hearty servings, 500ml."
        },
        {
          "unique_id": "CLAYK007",
          "name": "Clay Baking Dish",
          "image": "https://picsum.photos/200/300?random=7",
          "price": 29.99,
          "rating": 4.8,
          "description": "Rectangular clay baking dish, oven-safe, 1.8-liter capacity."
        },
        {
          "unique_id": "CLAYK008",
          "name": "Clay Teapot",
          "image": "https://picsum.photos/200/300?random=8",
          "price": 32.00,
          "rating": 4.7,
          "description": "Clay teapot with strainer, ideal for loose tea, 600ml."
        },
        {
          "unique_id": "CLAYK009",
          "name": "Clay Dinner Plate",
          "image": "https://picsum.photos/200/300?random=9",
          "price": 19.75,
          "rating": 4.6,
          "description": "Flat clay dinner plate, durable and stylish, 10-inch diameter."
        },
        {
          "unique_id": "CLAYK010",
          "name": "Clay Spice Jar",
          "image": "https://picsum.photos/200/300?random=10",
          "price": 9.99,
          "rating": 4.5,
          "description": "Small clay jar with lid for storing spices, 100ml."
        },
        {
          "unique_id": "CLAYK011",
          "name": "Clay Butter Dish",
          "image": "https://picsum.photos/200/300?random=11",
          "price": 14.25,
          "rating": 4.3,
          "description": "Clay butter dish with lid, keeps butter fresh."
        },
        {
          "unique_id": "CLAYK012",
          "name": "Clay Pie Dish",
          "image": "https://picsum.photos/200/300?random=12",
          "price": 21.50,
          "rating": 4.7,
          "description": "Round clay pie dish, perfect for baking, 9-inch diameter."
        },
        {
          "unique_id": "CLAYK013",
          "name": "Clay Storage Canister",
          "image": "https://picsum.photos/200/300?random=13",
          "price": 25.00,
          "rating": 4.8,
          "description": "Large clay canister for dry goods, 2-liter capacity."
        },
        {
          "unique_id": "CLAYK014",
          "name": "Clay Gravy Boat",
          "image": "https://picsum.photos/200/300?random=14",
          "price": 16.99,
          "rating": 4.6,
          "description": "Clay gravy boat with spout, holds 300ml."
        },
        {
          "unique_id": "CLAYK015",
          "name": "Clay Bread Pan",
          "image": "https://picsum.photos/200/300?random=15",
          "price": 28.50,
          "rating": 4.9,
          "description": "Clay bread pan for artisan loaves, oven-safe."
        },
        {
          "unique_id": "CLAYK016",
          "name": "Clay Mug",
          "image": "https://picsum.photos/200/300?random=16",
          "price": 11.00,
          "rating": 4.4,
          "description": "Handmade clay mug for coffee or tea, 350ml."
        },
        {
          "unique_id": "CLAYK017",
          "name": "Clay Trivet",
          "image": "https://picsum.photos/200/300?random=17",
          "price": 10.25,
          "rating": 4.5,
          "description": "Clay trivet for hot pots, heat-resistant, 8-inch."
        },
        {
          "unique_id": "CLAYK018",
          "name": "Clay Ramekin Set",
          "image": "https://picsum.photos/200/300?random=18",
          "price": 17.99,
          "rating": 4.6,
          "description": "Set of 4 clay ramekins for desserts, 150ml each."
        },
        {
          "unique_id": "CLAYK019",
          "name": "Clay Oil Dispenser",
          "image": "https://picsum.photos/200/300?random=19",
          "price": 20.00,
          "rating": 4.7,
          "description": "Clay oil dispenser with pour spout, 400ml."
        },
        {
          "unique_id": "CLAYK020",
          "name": "Clay Salad Plate",
          "image": "https://picsum.photos/200/300?random=20",
          "price": 15.50,
          "rating": 4.5,
          "description": "Clay salad plate, lightweight, 8-inch diameter."
        },
        {
          "unique_id": "CLAYK021",
          "name": "Clay Colander",
          "image": "https://picsum.photos/200/300?random=21",
          "price": 23.75,
          "rating": 4.8,
          "description": "Clay colander with drainage holes, great for pasta."
        },
        {
          "unique_id": "CLAYK022",
          "name": "Clay Sugar Bowl",
          "image": "https://picsum.photos/200/300?random=22",
          "price": 13.25,
          "rating": 4.4,
          "description": "Clay sugar bowl with lid and spoon slot, 250ml."
        },
        {
          "unique_id": "CLAYK023",
          "name": "Clay Roasting Pan",
          "image": "https://picsum.photos/200/300?random=23",
          "price": 36.99,
          "rating": 4.9,
          "description": "Large clay roasting pan, perfect for meats, 3-liter."
        },
        {
          "unique_id": "CLAYK024",
          "name": "Clay Creamer",
          "image": "https://picsum.photos/200/300?random=24",
          "price": 12.99,
          "rating": 4.6,
          "description": "Clay creamer for milk or cream, 200ml capacity."
        },
        {
          "unique_id": "CLAYK025",
          "name": "Clay Utensil Holder",
          "image": "https://picsum.photos/200/300?random=25",
          "price": 19.00,
          "rating": 4.7,
          "description": "Clay utensil holder for spatulas and spoons, 1-liter."
        }
      ]
  return (
    <div>
      <h1>Clay</h1>
    </div>
  )
}

export default Claycombo
