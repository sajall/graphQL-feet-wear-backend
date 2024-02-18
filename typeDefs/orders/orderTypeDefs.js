

const { gql } = require("apollo-server-express");
//Queries
const orderTypeDefs = gql`
 
  type Order {
    username: String
    userId: String
    subtotal: Int
    items: [Item]
    status: String
  }

    type Item {
        _id: ID
        quantity: Int
        size: String
        images:[String]
        name:String
        price:Int

  }

  input ItemInput {
      _id: String!
      quantity: Int!
      size: String!
      images:[String]!
      name:String!
      price:Int!
  }


  type Query {
    getAllOrders: [Order]!
  }

  type Mutation {
    placeOrder(username: String!, userId: String!, subtotal: Int!, items: [ItemInput]!, status: String!): Order!
  }
 
`;

module.exports = orderTypeDefs;