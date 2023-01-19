import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { Box } from 'graphql/generated';
import { boxesQuery } from '../quries/boxes.query';

@Injectable({ providedIn: 'root' })
export class BoxListApiService {
  constructor(private apollo: Apollo) {}

  loadBoxes() {
    return this.apollo.query<{ boxes: { edges: { node: Box }[] } }>({
      query: boxesQuery,
    });
  }
}
