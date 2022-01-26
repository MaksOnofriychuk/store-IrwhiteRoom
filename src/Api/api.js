const products = [
  {
    _id: 1,
    name: "Флип",
    size: ["XS", "S", "M", "L"],
    price: 99,
    photo: "./src/assets/img/1.jpg",
  },
  {
    _id: 2,
    name: "Стринг",
    size: ["XS", "S", "M", "L"],
    price: 199,
    photo: "./src/assets/img/2.jpg",
  },
  {
    _id: 3,
    name: "Флип",
    size: ["XS", "S", "M", "L"],
    price: 99,
    photo: "./src/assets/img/3.jpg",
  },
  {
    _id: 4,
    name: "Стринг",
    size: ["XS", "S", "M", "L"],
    price: 199,
    photo: "./src/assets/img/4.jpg",
  },
  {
    _id: 5,
    name: "Стринг",
    size: ["XS", "S", "M", "L"],
    price: 199,
    photo: "./src/assets/img/5.jpg",
  },
  {
    _id: 6,
    name: "Стринг",
    size: ["XS", "S", "M", "L"],
    price: 199,
    photo: "./src/assets/img/6.jpg",
  },
  {
    _id: 7,
    name: "Флип",
    size: ["XS", "S", "M", "L"],
    price: 99,
    photo: "./src/assets/img/1.jpg",
  },
  {
    _id: 8,
    name: "Флип",
    size: ["XS", "S", "M", "L"],
    price: 99,
    photo: "./src/assets/img/2.jpg",
  },
  {
    _id: 9,
    name: "Флип",
    size: ["XS", "S", "M", "L"],
    price: 99,
    photo: "./src/assets/img/3.jpg",
  },
  {
    _id: 10,
    name: "Флип",
    size: ["XS", "S", "M", "L"],
    price: 99,
    photo: "./src/assets/img/4.jpg",
  },
  {
    _id: 11,
    name: "Стринг",
    size: ["XS", "S", "M", "L"],
    price: 199,
    photo: "./src/assets/img/5.jpg",
  },
  {
    _id: 12,
    name: "Стринг",
    size: ["XS", "S", "M", "L"],
    price: 199,
    photo: "./src/assets/img/6.jpg",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(products);
    }, 2000);
  });

// const getById = (id) =>
//   new Promise((resolve) => {
//     window.setTimeout(function () {
//       resolve(users.find((user) => user._id === id));
//     }, 1000);
//   });
export default {
  fetchAll,
};
