import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { UserModule } from './modules/user/user.module';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.group(action.type);
    const nextState = reducer(state, action);
    console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, state);
    console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
    console.log(
      `%c next state`,
      `color: #4CAF50; font-weight: bold`,
      nextState
    );
    console.groupEnd();
    return nextState;
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UserModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
