import { gql } from 'apollo-angular';

export const currentUserQuery = gql`
  query {
    currentUser {
      id
      name
      wallets {
        id
        amount
        currency
        name
      }
    }
  }
`;
