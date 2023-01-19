import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as userActions from './modules/user/store/user.actions';
import { selectUser, selectWallet } from './modules/user/store/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'tech-task-18-jan';

  user$ = this.store.select(selectUser);
  wallet$ = this.store.select(selectWallet);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(userActions.loadUser());
    this.store.dispatch(userActions.subscribeOnUpdateWallet());
  }

  login(): void {
    this.store.dispatch(userActions.login());
  }
}
