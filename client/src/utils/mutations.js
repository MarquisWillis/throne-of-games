import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation AddToCart($body: CartInput) {
    addToCart(body: $body) {
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

export const REMOVE_FROM_CART = gql`
  mutation RemoveFromCart($gameId: ID!) {
    removeFromCart(gameId: $gameId) {
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
