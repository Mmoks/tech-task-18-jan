import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { User, Wallet } from 'graphql/generated';
import { currentUserQuery } from '../queries/user.query';
import { onUpdateWalletSubscription } from '../queries/on-update-wallet.subscription';

@Injectable({ providedIn: 'root' })
export class UserApiService {
  constructor(private apollo: Apollo) {}

  loadUser() {
    return this.apollo.query<{ currentUser: User }>({
      query: currentUserQuery,
    });
  }

  onUpdateWallet() {
    return this.apollo.subscribe<{ updateWallet: { wallet: Wallet } }>({
      query: onUpdateWalletSubscription,
    });
  }
}
