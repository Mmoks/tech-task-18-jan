import { gql } from 'apollo-angular';

export const boxQuery = gql`
  query ($id: ID) {
    box(id: $id) {
      id
      name
      iconUrl
      cost
      currency
    }
  }
`;
