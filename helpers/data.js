import { v4 as uuidv4 } from "uuid";
import axios from "axios";

// the icons of the ingredients
const ingIcons = [
  {
    ingredient: "Onions",
    icon: "https://i.imgur.com/Iu7u48M.png",
  },
  {
    ingredient: "Cheese",
    icon: "https://i.imgur.com/8PHUUHe.png",
  },
  {
    ingredient: "BBQ Sauce",
    icon: "https://i.imgur.com/8dxLUAE.png",
  },
  {
    ingredient: "Chicken",
    icon: "https://i.imgur.com/9mgcbeE.png",
  },
  {
    ingredient: "Mushrooms",
    icon: "https://i.imgur.com/wlNbkpY.png",
  },
  {
    ingredient: "Sausage",
    icon: "https://i.imgur.com/u8vKJwQ.png",
  },
  {
    ingredient: "Green peppers",
    icon: "https://i.imgur.com/4eKDshi.png",
  },
  {
    ingredient: "Beef pepperoni",
    icon: "https://i.imgur.com/K8hIfol.png",
  },
  {
    ingredient: "Black Olives",
    icon: "https://i.imgur.com/A9OCCcb.png",
  },
  {
    ingredient: "Beef",
    icon: "https://i.imgur.com/PFvzIp9.png",
  },
  {
    ingredient: "Jalapenos",
    icon: "https://i.imgur.com/FWPWDyZ.png",
  },
  {
    ingredient: "Sweet Hawaiian pineapple",
    icon: "https://i.imgur.com/EmMeYFS.png",
  },
  {
    ingredient: "Special Sauce",
    icon: "https://i.imgur.com/1loIqQN.png",
  },
  {
    ingredient: "Grilled Chicken",
    icon: "https://i.imgur.com/OzRv7v3.png",
  },
  {
    ingredient: "Ranch",
    icon: "https://i.imgur.com/etTFmM0.png",
  },
  {
    ingredient: "Hot Sauce",
    icon: "https://i.imgur.com/a4InqZ5.png",
  },
  {
    ingredient: "Steak",
    icon: "https://i.imgur.com/SRNA7Wa.png",
  },
  {
    ingredient: "Melted Cheese",
    icon: "https://i.imgur.com/5xUPlnE.jpg",
  },
  {
    ingredient: "Mozzarella Cheese",
    icon: "https://i.imgur.com/rW86yJe.png",
  },
  {
    ingredient: "Alfredo Sauce",
    icon: "https://i.imgur.com/MLNhEZK.jpg",
  },
];

//   the menu of the pizzas
export const menu = [
  {
    name: "BBQ Feast",
    id: uuidv4(),
    image: "https://i.imgur.com/O8mTkO7.jpg",
    pizzaType: ["chicken"],
    price: 7.9,
    ingredients: [
      {
        ingredient: "Onions",
        icon: "https://i.imgur.com/Iu7u48M.png",
        state: "regular",
        price: 0.75,
      },
      {
        ingredient: "Cheese",
        icon: "https://i.imgur.com/8PHUUHe.png",
        state: "regular",
        price: 1,
      },
      {
        ingredient: "BBQ Sauce",
        icon: "https://i.imgur.com/8dxLUAE.png",
        state: "regular",
        price: 1.75,
      },
      {
        ingredient: "Marinated Chicken",
        icon: "https://i.imgur.com/9mgcbeE.png",
        state: "regular",
        price: 1.5,
      },
    ],
    ingDescription: "Marinated Chicken, BBQ Sauce with Onions",
  },
  {
    name: "Delux Feast",
    id: uuidv4(),
    image: "https://i.imgur.com/Xu61fbu.jpg",
    pizzaType: ["beef"],
    price: 9.4,
    ingredients: [
      {
        ingredient: "Onions",
        icon: "https://i.imgur.com/Iu7u48M.png",
        state: "regular",
        price: 0.75,
      },
      {
        ingredient: "Cheese",
        icon: "https://i.imgur.com/8PHUUHe.png",
        state: "regular",
        price: 1,
      },
      {
        ingredient: "Mushrooms",
        icon: "https://i.imgur.com/wlNbkpY.png",
        state: "regular",
        price: 0.75,
      },
      {
        ingredient: "Italian Sausage",
        icon: "https://i.imgur.com/u8vKJwQ.png",
        state: "regular",
        price: 1.5,
      },
      {
        ingredient: "Green peppers",
        icon: "https://i.imgur.com/4eKDshi.png",
        state: "regular",
        price: 0.5,
      },
      {
        ingredient: "Beef pepperoni",
        icon: "https://i.imgur.com/K8hIfol.png",
        state: "regular",
        price: 1,
      },
    ],
    ingDescription:
      "Beef pepperoni, Italian sausage, Green peppers, mushrooms & onions",
  },
  {
    name: "Margherita",
    id: uuidv4(),
    image: "https://i.imgur.com/qMhGGtL.jpg",
    pizzaType: ["cheese"],
    price: 8.7,
    ingredients: [
      {
        ingredient: "Mozzarella Cheese",
        icon: "https://i.imgur.com/rW86yJe.png",
        state: "regular",
        price: 1.5,
      },
    ],
    ingDescription:
      "A rich layer of 100% real mozzarella cheese. Enjoy it on its own",
  },
  {
    name: "Extravaganzza Feast",
    id: uuidv4(),
    image: "https://i.imgur.com/FQiukqk.jpeg",
    pizzaType: ["pepperoni"],
    price: 9.75,
    ingredients: [
      {
        ingredient: "Onions",
        icon: "https://i.imgur.com/Iu7u48M.png",
        state: "regular",
        price: 0.75,
      },
      {
        ingredient: "Cheese",
        icon: "https://i.imgur.com/8PHUUHe.png",
        state: "regular",
        price: 1,
      },
      {
        ingredient: "Mushrooms",
        icon: "https://i.imgur.com/wlNbkpY.png",
        state: "regular",
        price: 0.75,
      },
      {
        ingredient: "Italian Sausage",
        icon: "https://i.imgur.com/u8vKJwQ.png",
        state: "regular",
        price: 1.5,
      },
      {
        ingredient: "Green peppers",
        icon: "https://i.imgur.com/4eKDshi.png",
        state: "regular",
        price: 0.5,
      },
      {
        ingredient: "Beef pepperoni",
        icon: "https://i.imgur.com/K8hIfol.png",
        state: "regular",
        price: 1,
      },
      {
        ingredient: "Black Olives",
        icon: "https://i.imgur.com/PFvzIp9.png",
        state: "regular",
        price: 0.75,
      },
      {
        ingredient: "Beef",
        icon: "https://i.imgur.com/PFvzIp9.png",
        state: "regular",
        price: 0.75,
      },
    ],
    ingDescription:
      "Beef pepperoni, Italian sausage, beef, onions, green peppers, mushrooms & black olives",
  },
  {
    name: "Hot & Spicy Feast",
    id: uuidv4(),
    image: "https://i.imgur.com/MQCOxiW.jpeg",
    pizzaType: ["beef"],
    price: 8.25,
    ingredients: [
      {
        ingredient: "Onions",
        icon: "https://i.imgur.com/Iu7u48M.png",
        state: "regular",
        price: 0.75,
      },
      {
        ingredient: "Black Olives",
        icon: "https://i.imgur.com/PFvzIp9.png",
        state: "regular",
        price: 0.75,
      },
      {
        ingredient: "Beef",
        icon: "https://i.imgur.com/PFvzIp9.png",
        state: "regular",
        price: 0.75,
      },
      {
        ingredient: "Jalapenos",
        icon: "https://i.imgur.com/FWPWDyZ.png",
        state: "regular",
        price: 1,
      },
      {
        ingredient: "Cheese",
        icon: "https://i.imgur.com/8PHUUHe.png",
        state: "regular",
        price: 1,
      },
    ],
    ingDescription: "Beef, onions, black olives and jalapenos",
  },
  {
    name: "Hawaiian Feast",
    id: uuidv4(),
    image: "https://i.imgur.com/rcSZnVN.jpeg",
    pizzaType: ["pepperoni"],
    price: 8.7,
    ingredients: [
      {
        ingredient: "Sweet Hawaiian pineapple",
        icon: "https://i.imgur.com/EmMeYFS.png",
        state: "regular",
        price: 1.5,
      },
      {
        ingredient: "Beef pepperoni",
        icon: "https://i.imgur.com/K8hIfol.png",
        state: "regular",
        price: 1,
      },
      {
        ingredient: "Cheese",
        icon: "https://i.imgur.com/8PHUUHe.png",
        state: "regular",
        price: 1,
      },
    ],
    ingDescription: "Sweet Hawaiian pineapple & beef pepperoni",
  },
  {
    name: "Italiano Feast",
    id: uuidv4(),
    image: "https://i.imgur.com/o4Km2pD.jpg",
    pizzaType: ["pepperoni"],
    price: 8.7,
    ingredients: [
      {
        ingredient: "Italian Sausage",
        icon: "https://i.imgur.com/u8vKJwQ.png",
        state: "regular",
        price: 1.5,
      },
      {
        ingredient: "Beef pepperoni",
        icon: "https://i.imgur.com/K8hIfol.png",
        state: "regular",
        price: 1,
      },
      {
        ingredient: "Cheese",
        icon: "https://i.imgur.com/8PHUUHe.png",
        state: "regular",
        price: 1,
      },
      {
        ingredient: "Mushrooms",
        icon: "https://i.imgur.com/wlNbkpY.png",
        state: "regular",
        price: 0.75,
      },
    ],
    ingDescription: "Beef pepperoni, mushrooms and Italiano sausage",
  },
  {
    name: "Meatzza Feast",
    id: uuidv4(),
    image: "https://i.imgur.com/3ZGFWjX.jpeg",
    pizzaType: ["pepperoni", "beef"],
    price: 15,
    ingredients: [
      {
        ingredient: "Italian Sausage",
        icon: "https://i.imgur.com/u8vKJwQ.png",
        state: "regular",
        price: 1.5,
      },
      {
        ingredient: "Beef pepperoni",
        icon: "https://i.imgur.com/K8hIfol.png",
        state: "regular",
        price: 1,
      },
      {
        ingredient: "Cheese",
        icon: "https://i.imgur.com/8PHUUHe.png",
        state: "regular",
        price: 1,
      },
      {
        ingredient: "Beef",
        icon: "https://i.imgur.com/PFvzIp9.png",
        state: "regular",
        price: 1,
      },
    ],
    ingDescription: "Beef pepperoni, Italian sausage & beef",
  },
  {
    name: "Pepperoni Feast",
    id: uuidv4(),
    image: "https://i.imgur.com/8M6zSLB.jpeg",
    pizzaType: ["Pepperoni", "special"],
    price: 11.7,
    ingredients: [
      {
        ingredient: "Braveheart Pizzeria's Special Sauce",
        icon: "https://i.imgur.com/1loIqQN.png",
        state: "regular",
        price: 2,
      },
      {
        ingredient: "Mozzarella Cheese",
        icon: "https://i.imgur.com/rW86yJe.png",
        state: "regular",
        price: 1.5,
      },
      {
        ingredient: "Beef pepperoni",
        icon: "https://i.imgur.com/K8hIfol.png",
        state: "regular",
        price: 1,
      },
    ],
    ingDescription:
      "Beef Pepperoni with Mozzarella and Braveheart Pizzeria's Special Sauce",
  },
  {
    name: "Tex-Mex Feast",
    id: uuidv4(),
    image: "https://i.imgur.com/tMG1FMS.jpg",
    pizzaType: ["chicken"],
    price: 8,
    ingredients: [
      {
        ingredient: "Marinated Chicken",
        icon: "https://i.imgur.com/9mgcbeE.png",
        state: "regular",
        price: 1.5,
      },
      {
        ingredient: "Onions",
        icon: "https://i.imgur.com/Iu7u48M.png",
        state: "regular",
        price: 0.75,
      },
      {
        ingredient: "Green peppers",
        icon: "https://i.imgur.com/4eKDshi.png",
        state: "regular",
        price: 0.5,
      },
      {
        ingredient: "Black Olives",
        icon: "https://i.imgur.com/PFvzIp9.png",
        state: "regular",
        price: 0.75,
      },
      {
        ingredient: "Cheese",
        icon: "https://i.imgur.com/8PHUUHe.png",
        state: "regular",
        price: 1,
      },
    ],
    ingDescription:
      "Marinated chicken topped with onions, green pepper and black olives. Spice it up with jalapenos",
  },
  {
    name: "Chicken Legend Ranch",
    id: uuidv4(),
    image: "https://i.imgur.com/WAcHjuT.jpg",
    pizzaType: ["chicken"],
    price: 8.25,
    ingredients: [
      {
        ingredient: "Grilled Chicken",
        icon: "https://i.imgur.com/OzRv7v3.png",
        state: "regular",
        price: 4,
      },
      {
        ingredient: "Cheese",
        icon: "https://i.imgur.com/8PHUUHe.png",
        state: "regular",
        price: 1,
      },
      {
        ingredient: "Onions",
        icon: "https://i.imgur.com/Iu7u48M.png",
        state: "regular",
        price: 0.75,
      },
      {
        ingredient: "Ranch",
        icon: "https://i.imgur.com/etTFmM0.png",
        state: "regular",
        price: 1.75,
      },
    ],
    ingDescription: "Pure breast grilled chicken, onions, with ranch",
  },
  {
    name: "Chicken Legend Hot",
    id: uuidv4(),
    image: "https://i.imgur.com/GyN4fJo.jpeg",
    pizzaType: ["chicken"],
    price: 10.5,
    ingredients: [
      {
        ingredient: "Grilled Chicken",
        icon: "https://i.imgur.com/OzRv7v3.png",
        state: "regular",
        price: 4,
      },
      {
        ingredient: "Cheese",
        icon: "https://i.imgur.com/8PHUUHe.png",
        state: "regular",
        price: 1,
      },
      {
        ingredient: "Onions",
        icon: "https://i.imgur.com/Iu7u48M.png",
        state: "regular",
        price: 0.75,
      },
      {
        ingredient: "Hot Sauce",
        icon: "https://i.imgur.com/a4InqZ5.png",
        state: "regular",
        price: 1.75,
      },
    ],
    ingDescription: "Pure breast grilled chicken, onions, with hot Sauce",
  },
  {
    name: "Chicken Legend BBQ",
    id: uuidv4(),
    image: "https://i.imgur.com/muowafB.jpeg",
    pizzaType: ["chicken"],
    price: 11.7,
    ingredients: [
      {
        ingredient: "Grilled Chicken",
        icon: "https://i.imgur.com/OzRv7v3.png",
        state: "regular",
        price: 4,
      },
      {
        ingredient: "Cheese",
        icon: "https://i.imgur.com/8PHUUHe.png",
        state: "regular",
        price: 1,
      },
      {
        ingredient: "Onions",
        icon: "https://i.imgur.com/Iu7u48M.png",
        state: "regular",
        price: 0.75,
      },
      {
        ingredient: "BBQ Sauce",
        icon: "https://i.imgur.com/8dxLUAE.png",
        state: "regular",
        price: 1.75,
      },
    ],
    ingDescription: "Pure breast grilled chicken, onions, with BBQ sauce",
  },
  {
    name: "Phily Cheese Steak",
    id: uuidv4(),
    image: "https://i.imgur.com/ivOQIIE.jpeg",
    pizzaType: ["beef", "cheese"],
    price: 18,
    ingredients: [
      {
        ingredient: "Philly Steak",
        icon: "https://i.imgur.com/SRNA7Wa.png",
        state: "regular",
        price: 5.25,
      },
      {
        ingredient: "Melted Cheese",
        icon: "https://i.imgur.com/rW86yJe.png",
        state: "regular",
        price: 1.75,
      },
      {
        ingredient: "Onions",
        icon: "https://i.imgur.com/Iu7u48M.png",
        state: "regular",
        price: 0.75,
      },
      {
        ingredient: "Green peppers",
        icon: "https://i.imgur.com/4eKDshi.png",
        state: "regular",
        price: 0.5,
      },
      {
        ingredient: "Mushrooms",
        icon: "https://i.imgur.com/wlNbkpY.png",
        state: "regular",
        price: 0.75,
      },
    ],
    ingDescription:
      "Tender slices of Philly steak with a blend of melted cheese, onions, green peppers & mushrooms",
  },
  {
    name: "Kickers Pizza BBQ Sauce",
    id: uuidv4(),
    image: "https://i.imgur.com/PeNiyNs.jpg",
    pizzaType: ["chicken", "special"],
    price: 14.7,
    ingredients: [
      {
        ingredient: "Chicken Kickers",
        icon: "https://i.imgur.com/9mgcbeE.png",
        state: "regular",
        price: 0.75,
      },
      {
        ingredient: "Mozzarella Cheese",
        icon: "https://i.imgur.com/rW86yJe.png",
        state: "regular",
        price: 1.5,
      },
      {
        ingredient: "BBQ Sauce",
        icon: "https://i.imgur.com/8dxLUAE.png",
        state: "regular",
        price: 1.75,
      },
      {
        ingredient: "Jalapenos",
        icon: "https://i.imgur.com/FWPWDyZ.png",
        state: "regular",
        price: 1,
      },
      {
        ingredient: "Onions",
        icon: "https://i.imgur.com/Iu7u48M.png",
        state: "regular",
        price: 0.75,
      },
    ],
    ingDescription:
      "Chicken Kickers, onions, mozzarella cheese, american slices cheese and jalapeno with a hint of oregano topped with BBQ Sauce",
  },
  {
    name: "Alfredo Pizza",
    id: uuidv4(),
    image: "https://i.imgur.com/OWFcvkH.jpg",
    pizzaType: ["chicken", "special"],
    price: 13.2,
    ingredients: [
      {
        ingredient: "Alfredo Sauce",
        icon: "https://i.imgur.com/MLNhEZK.jpg",
        state: "regular",
        price: 1.5,
      },
      {
        ingredient: "Mozzarella Cheese",
        icon: "https://i.imgur.com/rW86yJe.png",
        state: "regular",
        price: 1.5,
      },
      {
        ingredient: "Mushrooms",
        icon: "https://i.imgur.com/wlNbkpY.png",
        state: "regular",
        price: 0.75,
      },
      {
        ingredient: "Grilled Chicken",
        icon: "https://i.imgur.com/OzRv7v3.png",
        state: "regular",
        price: 4,
      },
    ],
    ingDescription:
      "Original Alfredo Sauce, Grilled Chicken Breast Pieces, Mozzarella Cheese, Slices of Fresh Mushroom.",
  },
  {
    name: "Coke Bottle",
    id: uuidv4(),
    image: "https://i.imgur.com/GikBk4b.jpg",
    pizzaType: ["drinks"],
    price: 2,
    ingredients: [],
    ingDescription: "Volume: 1 L",
  },
  {
    name: "Peach Ice Tea Bottle",
    id: uuidv4(),
    image: "https://i.imgur.com/j3xyfPE.jpg",
    pizzaType: ["drinks"],
    price: 3.5,
    ingredients: [],
    ingDescription: "Volume: 1.25 L",
  },
  {
    name: "Heineken Lager Beer Bottle",
    id: uuidv4(),
    image: "https://i.imgur.com/u5mPi2G.jpg",
    pizzaType: ["drinks"],
    price: 5,
    ingredients: [],
    ingDescription: "Volume: 33 cL",
  },
  {
    name: "Old Jamaica Ginger Beer can",
    id: uuidv4(),
    image: "https://i.imgur.com/B98lEzk.jpg",
    pizzaType: ["drinks"],
    price: 4,
    ingredients: [],
    ingDescription: "Volume: 33 cL",
  },
];
//   push data to the db
// export const pushDataHandler = () => {
//   console.log(menu);
//   for (let item in menu) {
//     axios
//       .post(
//         `https://braveheart-pizzeria-default-rtdb.firebaseio.com/.json/`,
//         menu[item]
//       )
//       .then((res) => {
//         console.log(res);
//       });
//   }
// };

export const pushDataHandler = () => {
  fetch('./pizzeria-menu.json')
    .then((response) => response.json())
    .then((menu) => {
      for (let item of menu) {
        axios
          .post('https://mockapi.io/api/v1/pizzeria-menu', item)
          .then((res) => console.log('Data posted:', res))
          .catch((error) => console.error('Error posting data:', error));
      }
    });
};
// This data is based on https://sarhan-food-menu.firebaseio.com/pizza-menu.json
