import { GraphQLClient } from 'graphql-request';
import { RequestDocument, Variables } from 'graphql-request/dist/types';

const PROFILE_PIC_SIZE = '120'; // px

// See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020
const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`;

interface RequestParams {
  query: RequestDocument;
  variables?: Variables;
  preview?: boolean;
}

export function request({ query, variables, preview }: RequestParams) {
  const endpoint = preview
    ? `
https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
  });
  return client.request(query, variables);
}

export const getHomeData = async () => {
  const data = await request({
    query: `
      query HomePage {
        home {
          profilePicture {
            responsiveImage(imgixParams: { fit: crop, w: ${PROFILE_PIC_SIZE}, h: ${PROFILE_PIC_SIZE}, auto: format }) {
              ...responsiveImageFragment
            }
          }
        }
      }

      ${responsiveImageFragment}
      `,
  });
  return data?.home;
};
