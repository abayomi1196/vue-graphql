import { gql } from "graphql-tag";

export const GET_CHARACTER_NAMES = gql`
  query characterNames {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
