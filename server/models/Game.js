/*
Game {
    title: "Game",
    price: number
    summary: "Short"
    description: "Long"
    categories: ""
    rating: "ESRB" 
}

*/
const { Schema, model, Types } = require("mongoose");

const gameSchema = new Schema({
  gameId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  image: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  summary: {
    type: String,
  },
  description: {
    type: String,
  },
  genres: [
    {
      type: String
    },
  ],
  rating: {
    type: String,
  },
});

const Game = model("Game", gameSchema);

module.exports = Game;
