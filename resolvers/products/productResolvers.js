
const Product = require("../../Models/Product");


//Resolvers for product
const productResolver = {
  Query: {
    hello: () => {
      return "Hello World";
    },
    getAll: async () => {

      const products = await Product.find();
      return products
    },


  },

  Mutation:{
    getSingleProduct: async (parent , args , context , info) => {
      const { _id } = args;
      
      try {
      const singleProd = await Product.findOne({_id:_id})
     return singleProd;
      } catch (error) {
        // Handle error
        throw new Error("Unable to find product: " + error.message);
       
      }
    },
  }

 
};
module.exports = productResolver;




