

const { gql } = require("apollo-server-express");
//Queries
const productTypeDefs = gql`
  type Product {
    title: String
    description: String
    _id: ID
    name: String
    price: Int
    discountedPrice: Int
    colors: [String]
    sizes: [String]
    images: [String]
    details: String
    createdAt: String
    updatedAt: String
    category: String
  }

  type Query {
    getAll: [Product]
    hello:String
  }


  type Mutation {
    getSingleProduct(
      _id:ID!
    ): Product!
    
  }
 
`;

module.exports = productTypeDefs;