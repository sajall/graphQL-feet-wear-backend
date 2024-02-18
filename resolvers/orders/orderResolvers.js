
    const Orders = require("../../Models/Orders");
  


    //Resolvers for product
    const orderResolver = {
        Query: {
            getAllOrders: async () => {
            const allOrders = await Orders.find();
            return allOrders
            }
        },
          Mutation: {
            placeOrder: async (parent, args, { models }) => {
                const { username, userId, subtotal, items, status } = args;
               
              const newOrder = await Orders({
                username,
                userId,
                subtotal,
                items,
                status
              });
              await newOrder.save();
        
              return newOrder;
            }
          }
        };

        
        module.exports = orderResolver;
        
        
        
        
        
        // Mutation: {
        //     placeOrder: async (parent, { username, userId, subtotal, items, status }, { models }) => {
        //       try {
        //         const populatedItems = await Promise.all(items.map(async (item) => {
        //           // Assuming `Product` is the model representing your products
        //           const product = await Product.findById(item._id);
        //           if (!product) {
        //             // Handle case where product is not found
        //             throw new Error(`Product with ID ${item._id} not found`);
        //           }
        //           return {
        //             ...item,
        //             name: product.name,
        //             images: product.images,
        //           };
        //         }));
          
        //         const newOrder = await Orders.create({
        //           username,
        //           userId,
        //           subtotal,
        //           items: populatedItems,
        //           status
        //         });
          
        //         return newOrder; // Returning the saved order document
              
        //       } catch (error) {
        //         // Handle any errors here
        //         console.error("Error placing order:", error);
        //         throw error; // Rethrow the error to be caught by the GraphQL layer
        //       }
        //     }
        //   }