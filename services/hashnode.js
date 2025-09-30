const { gql } = require("@apollo/client");

export const PUBLICATION_QUERY = gql`
  query GetPublications($username: String!) {
    user(username: $username) {
      publication {
        posts(page: 0) {
          title
          brief
          coverImage
          dateAdded
          slug
        }
      }
    }
  }
`;

export const POST_QUERY = gql`
  query GetPost($slug: String!) {
    post(slug: $slug, hostname: "senyone.sn") {
      coverImage
      title
      content
      slug
    }
  }
`;
