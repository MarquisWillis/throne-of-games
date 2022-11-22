import { gql } from "@apollo/client";

export const QUERY_USER = gql`
query User {
  user {
    _id
    username
    email
    cart {
      gameId
      image
      title
      price
    }
    cart_total
  }
}
`;

export const QUERY_SINGLE_GAME = gql`
  query Game($gameId: ID!) {
    game(gameId: $gameId) {
      gameId
      image
      title
      price
      summary
      description
      genres
      rating
    }
  }
`;

export const QUERY_ALL_GAMES = gql`
  query AllGames {
    allGames {
      gameId
      image
      title
      price
      summary
      description
      genres
      rating
    }
  }
`;
