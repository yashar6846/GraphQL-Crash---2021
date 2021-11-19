const { ApolloServer, gql } = require("apollo-server");
const { animals, mainCards } = require("./db");

const typeDefs = gql`
  type MainCard {
    title: String!
    image: String!
  }
  type Animal {
    id: ID!
    title: String!
    image: String!
    rating: Float
    price: String!
    description: [String!]!
    slug: String!
    stock: Int!
    onSale: Boolean
  }
  type Query {
    animals: [Animal!]!
    mainCards: [MainCard]
    animal(slug: String!): Animal
  }
`;

const resolvers = {
  Query: {
    mainCards: () => mainCards,
    animals: () => animals,
    animal: (parent, args, ctx) => {
      let animal = animals.find((animal) => {
        return animal.slug === args.slug;
      });
      return animal;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
