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

const HOMEPAGE_QUERY = `query HomePage {
  home {
    profilePicture {
      responsiveImage(imgixParams: { fit: crop, w: 100, h: 100, auto: format }) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
    }
  }
}`;

export const getHomeData = async() => {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return data?.home;
}
