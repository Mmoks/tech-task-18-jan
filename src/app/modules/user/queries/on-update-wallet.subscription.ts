import { gql } from 'apollo-angular';

export const onUpdateWalletSubscription = gql`
  subscription OnUpdateWallet {
    updateWallet {
      wallet {
        id
        amount
        name
        currency
      }
    }
  }
`;
