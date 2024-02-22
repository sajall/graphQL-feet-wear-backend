  const express = require("express");
  const { ApolloServer } = require("apollo-server-express");
  const mongoose = require("mongoose");
  const typeDefs = require("./typeDefs/mergeTypeDefs");
  const resolvers = require("./resolvers/mergeResolvers");
const jwt = require("jsonwebtoken")



  //Database Connection
  const URL = `mongodb+srv://aminaaslam985:amina123@cluster0.w7bvzq1.mongodb.net/feetwear-paradise`
 

  mongoose.connect(URL).then(() => console.log('MongoDb connected')).catch((err) => console.log(err))

  const startServer = async () => {
    const app = express();
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      // context:({req})=>{
      //   const { authorization } = req.headers
      //   if(authorization){
      //     const {userId} = jwt.verify(authorization , "this is my cat")
      //     return {userId}
      //   }
      // }
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app: app });
    app.listen(8000, () => console.log(" Server UP & RUnning *8000 "));
  };
  startServer();
