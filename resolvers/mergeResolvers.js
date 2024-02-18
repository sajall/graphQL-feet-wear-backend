const { mergeResolvers } =require( 'merge-graphql-schemas');
const resolver1 = require('./products/productResolvers');
const resolver2 = require('./users/userResolvers');
const resolver3 = require('./orders/orderResolvers')

const resolvers = [resolver1 , resolver2 , resolver3]

module.exports = mergeResolvers(resolvers);



