// const variables: Auth, User Models, Apollo
const { AuthenticationError } = require("apollo-server-express");
const { Game, User } = require("../models");
const { signToken } = require("../utils/auth");
const { Types } = require('mongoose');

// resolver const
const resolvers = {
  // -- Query find with gameid, user , genre ,
  Query: {
    allGames: async (parent, args, context) => {
      return await Game.find();
    },
    game: async (parent, args, context) => {
      return await Game.findById(args.gameId);
    },
    // // TODO: ask about genre query and if we need populate
    // genre: async (parent, args, context) => {
    //   const games = await Game.find({ genres: args.genreName });
    //   return games;
    // },
    user: async (parent, args, context) => {
      console.log(context.user._id)
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }
    },
  },
  // Mutation to addUser, login, addtoCart, and removefromCart
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addToCart: async (parent, { body }, context) => {
      console.log(context);
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { cart: body } },
          { new: true, runValidators: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("Not logged in");
    },
    removeFromCart: async (parent, { gameId }, context) => {
 
      console.log(context.user._id, gameId);
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { cart:  {gameId: Types.ObjectId(gameId)}  } },
          { new: true, runValidators: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("Not logged in");
    },

    // Send game element to checkout and populate checkout
  },
};
// export module
module.exports = resolvers;