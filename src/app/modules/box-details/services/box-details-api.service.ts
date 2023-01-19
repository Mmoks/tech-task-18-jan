import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Box, BoxOpening, OpenBoxInput } from 'graphql/generated';
import { boxQuery } from '../queries/box.query';
import { openBoxMutation } from '../queries/open-box.mutation';

@Injectable({ providedIn: 'root' })
export class BoxDetailsApiService {
  constructor(private apollo: Apollo) {}

  loadBox(id: string) {
    return this.apollo.query<{ box: Box }>({
      query: boxQuery,
      variables: { id },
    });
  }

  openBox(input: OpenBoxInput) {
    return this.apollo.mutate<{ openBox: { boxOpenings: BoxOpening[] } }>({
      mutation: openBoxMutation,
      variables: { input },
    });
  }
}
