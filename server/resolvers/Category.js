// const { animals, mainCards, categories } = require("../db");
const Category = {
  animals: (parent, args, { animals }) => {
    return animals.filter((animal) => {
      return animal.category === parent.id;
    });
  },
};

module.exports = Category;
