import { GraphQLClient } from 'graphql-request';
import {RequestDocument, Variables} from "graphql-request/dist/types";

interface RequestParams {
  query: RequestDocument;
  variables?: Variables;
  preview?: boolean;
}

export function request({ query, variables, preview }: RequestParams) {
  const endpoint = preview ? `https://graphql.datocms.com/preview` : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
  });
  return client.request(query, variables);
}
