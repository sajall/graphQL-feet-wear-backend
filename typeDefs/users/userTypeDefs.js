

const { gql } = require("apollo-server-express");
//Queries
const userTypeDefs = gql`




type User {
  _id: ID!
  name: String!
  email: String!
  password: String!
  streetAddress: String!
  city: String!
  state: String!
  country: String!
  postalCode: String!
}

type Query {
  users: [User]!
}

  type Token{
    token:String!
  }
 
  type Mutation {
    signupUser(
      name: String!
      email: String!
      password: String!
      streetAddress: String!
      city: String!
      state: String!
      country: String!
      postalCode: String!
    ): User
    loginUser(email:String! , password:String!):AuthPayload
  }

  type AuthPayload {
    token: String!
    user: User!
  }
`;

module.exports = userTypeDefs;