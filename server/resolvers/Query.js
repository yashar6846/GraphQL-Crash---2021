// const { animals, mainCards, categories } = require("../db");
const Query = {
  mainCards: () => mainCards,
  animals: (parent, args, { animals }) => animals,
  animal: (parent, args, { animals }) => {
    let animal = animals.find((animal) => {
      return animal.slug === args.slug;
    });
    return animal;
  },
  categories: (parent, args, { categorise }) => categories,
  category: (parent, args, { categorise }) => {
    let category = categories.find((category) => {
      return category.slug === args.slug;
    });
    return category;
  },
};
module.exports = Query;
