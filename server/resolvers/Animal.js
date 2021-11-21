// const { animals, mainCards, categories } = require("../db");
const Animal = {
  category: (parent, args, { categories }) => {
    return categories.find((category) => {
      return category.id === parent.category;
    });
  },
};
module.exports = Animal;
