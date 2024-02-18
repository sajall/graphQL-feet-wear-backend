const { mergeTypes } =require( "merge-graphql-schemas");

const productTypeDefs= require("./products/productTypeDefs");
const userTypeDefs = require("./users/userTypeDefs");
const orderTypeDefs = require("./orders/orderTypeDefs")



const typeDefs = [productTypeDefs, userTypeDefs , orderTypeDefs];

// NOTE: 2nd param is optional, and defaults to false
// Only use if you have defined the same type multiple times in
// different files and wish to attempt merging them togeth
module.exports = mergeTypes(typeDefs, { all: true });