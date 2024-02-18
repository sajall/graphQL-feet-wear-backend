const User = require("../../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
// const JWT_SECRET = require('process.env')

//Resolvers for product
const userResolver = {
  Query: {
   
    users: async () => {
      try {
        const users = await find();
        return users;
      } catch (error) {
        throw new Error("Failed to fetch users: " + error.message);
      }
    },
  },

  // mutations

  Mutation: {

// Signup user
    signupUser: async (parent , args , context , info) => {
      const { name,email,password,streetAddress,city,state,country,postalCode } = args;
      
      try {
      const user = await User.findOne({email:email})
      if(user){
        throw new Error("user already exists with that email")
      }
      const hashedPassword = await bcrypt.hash(password , 12)
        const newUser = new User({name,email,password:hashedPassword,streetAddress,city,state,country,postalCode });
        await newUser.save();
        return newUser;
      } catch (error) {
        // Handle error
        throw new Error("Could not create user: " + error.message);
       
      }
    },


    // LOgin user
    loginUser : async (parent , args , context , info)=>{
      const {email , password} = args;
      const user =await User.findOne({email:email})
      if(!user){
        throw new Error("user dosnt exists with that email")
      }
      const doMatch = await bcrypt.compare(password,user.password )
      if(!doMatch){
        throw new Error("invalid email or password")

      }
    const token =   jwt.sign({userId:user._id}, "this is my cat")
  return {token , user};
    }
    
}
};
module.exports = userResolver;







































//Resolvers for product
// const resolvers = {
  

//   Mutation:{
//     signupUser:async(_, {newUser})=>{
//         //  const user = await User(newUser).save();
//         // return user;
        
//         const user = new User(newUser); // Create a new instance of User model
//         const savedUser = await user.save(); // Save the user to the database
//         console.log( savedUser , 'this is user');
//          return savedUser;
//     },
//   }
// };
      // signupUser: async (_, { name,email,password,streetAddress,city,state,country,postalCode }) => {
      //   try {
      //     const newUser = new User({ name,email,password,streetAddress,city,state,country,postalCode});
      //     await newUser.save();
      //     console.log(newUser , 'this is new user');
      //     return newUser;
      //   } catch (error) {
      //     throw new Error("Could not create user: " + error.message);
      //   }
      // },
// signupUser: async (_, { newUser }) => {
    //   try {
        //     const user = new User(newUser); // Create a new instance of User model
//     const savedUser = await user.save(); // Save the user to the database
//     return savedUser; // Return the saved user
//   } catch (error) {
//     throw new Error('Error creating user: ' + error.message); // Throw an error if something goes wrong
//   }
// },
        // signupUser: async (parent, { newUser }, context, info) => {
        //     const savedUser = await new User({
        //       name: newUser.name,
        //       email: newUser.email,
        //       password: newUser.password,
        //       streetAddress :newUser.streetAddress,
        //       city: newUser.city,
        //       state: newUser.state,
        //       country:newUser.country,
        //       postalCode:newUser.postalCode
        //     });
        
        //     return new Promise((resolve, reject) => {
        //       newUser.save((err, res) => {
        //         err ? reject(err) : resolve(res);
        //       });
        //     });
        //   }